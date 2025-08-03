import io from "socket.io-client";

class SocketWorker {
  constructor(companyId , userId) {
    if (!SocketWorker.instance) {
      this.companyId = companyId
      this.userId = userId
      this.socket = null;
      this.configureSocket();
      this.eventListeners = {}; // Almacena los listeners de eventos registrados
      SocketWorker.instance = this;

    } 

    return SocketWorker.instance;
  }

  configureSocket() {
    this.socket = io(`${process.env.REACT_APP_BACKEND_URL}/${this?.companyId}` , {
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: Infinity,
      query: { userId: this.userId }
    });

    this.socket.on("connect", () => {
      console.log("Conectado al servidor Socket.IO");
    });

    this.socket.on("disconnect", () => {
      console.log("Desconectado del servidor Socket.IO");
      this.reconnectAfterDelay();
    });
  }

  // Añade un listener de eventos
  on(event, callback) {
    this.connect();
    this.socket.on(event, callback);

    // Almacena el listener en el objeto de listeners
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  // Emite un evento
  emit(event, data) {
    this.connect();
    this.socket.emit(event, data);
  }

  // Desconecta uno o más listeners de eventos
  off(event, callback) {
    this.connect();
    if (this.eventListeners[event]) {
      if (callback) {
        // Desconecta un listener específico
        this.socket.off(event, callback);
        this.eventListeners[event] = this.eventListeners[event].filter(cb => cb !== callback);
      } else {
        // Desconecta todos los listeners del evento
        this.eventListeners[event].forEach(cb => this.socket.off(event, cb));
        delete this.eventListeners[event];
      }
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null
      this.instance = null
      console.log("Socket desconectado manualmente");
    }
  }

  reconnectAfterDelay() {
    setTimeout(() => {
      if (!this.socket || !this.socket.connected) {
        console.log("Intentando reconectar tras la desconexión");
        this.connect();
      }
    }, 1000);
  }

  // Asegura que el socket esté conectado
  connect() {
    if (!this.socket) {
      this.configureSocket();
    }
  }

  forceReconnect() {

  }
}

const instance = (companyId, userId) => new SocketWorker(companyId, userId);

export default instance;
