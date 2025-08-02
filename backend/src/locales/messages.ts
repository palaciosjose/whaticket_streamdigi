const messages = {
  ACCESS_DENIED: "Acceso no permitido",
  UNAUTHORIZED_RESOURCE: "No tienes permiso para acceder a este recurso!",
  UNAUTHORIZED_ACTION: "No tienes permiso para esta acción!",
  PDF_SEND_ERROR: "No pude enviar el PDF, inténtalo de nuevo!",
  CHOOSE_OPTION: "Elige una opción",
  MENU: "Menú",
  WHATSAPP_NOT_IDENTIFIED: "Whatsapp no identificado",
  INVALID_INTERVAL: "Intervalo no válido",
  TICKET_NOT_FOUND: "Ticket no encontrado",
  CONTACT_NOT_FOUND: "Contacto no encontrado",
  WHATSAPP_NUMBER_NOT_FOUND: "Número de WhatsApp no encontrado",
  WHATSAPP_FROM_MESSAGE_NOT_FOUND: "WhatsApp del mensaje no encontrado",
  LIST_MESSAGE_SENT: "Mensaje de lista enviado correctamente",
  ERROR_SENDING_LIST_MESSAGE: "Error al enviar el mensaje de lista",
  COPY_MESSAGE_SENT: "Mensaje de copia enviado correctamente",
  ERROR_SENDING_COPY_MESSAGE: "Error al enviar el mensaje de copia",
  MESSAGE_SENT_SUCCESS: "Mensaje enviado con éxito",
  ERROR_SENDING_MESSAGE: "Error al enviar el mensaje",
  ERROR_TRANSCRIBING_AUDIO: "Error al transcribir el mensaje de audio.",
  OPERATION_NOT_POSSIBLE: "No fue posible realizar la operación",
  NUMBER_REQUIRED: "El número es obligatorio",
  API_EXTERNAL_FORBIDDEN:
    "Esta empresa no tiene permiso para usar la API Externa. ¡Contacta con el soporte para verificar nuestros planes!",
  MESSAGE_NOT_SENT_TRY_AGAIN:
    "No fue posible enviar el mensaje, inténtalo nuevamente en unos instantes",
  FILE_NOT_FOUND: "Archivo no encontrado",
  AUDIO_CONVERSION_FAILED: "La conversión a texto falló",
  BUTTON_COPY: "Botón copiar",
  USER_NOT_FROM_COMPANY: "El usuario no pertenece a esta empresa",
  USER_DELETED: "Usuario eliminado",
  FACEBOOK_PAGE_NOT_FOUND: "Página de Facebook no encontrada",
  SESSION_STARTING: "Iniciando sesión.",
  SESSION_DISCONNECTED: "Sesión desconectada.",
  NOT_POSSIBLE_QUERY_OTHER_COMPANY: "No es posible consultar registros de otra empresa",
  LOG_SEND_WINDOW: (hour: number, endHours: number, timeNow: number) =>
    `El envío inicia a las ${hour} y termina a las ${endHours}, la hora actual ${timeNow} no está dentro del horario`,
  SCHEDULED_SHOT: (name: string) => `Disparo programado para: ${name}`,
  SCHEDULE_QUERY_ERROR: (id: number) => `Error al intentar consultar la programación: ${id}`,
  SCHEDULE_MESSAGE_SENT: (name: string) => `Mensaje programado enviado a: ${name}`,
  CAMPAIGNS_FOUND: (count: number) => `Campañas encontradas: ${count}`,
  CAMPAIGN_QUEUE_PROCESS: (id: number, delay: number) =>
    `Campaña enviada a la cola de procesamiento: Campaña=${id}, Retraso inicial=${delay}`,
  CAMPAIGNS_PROCESSED: "Todas las campañas fueron procesadas y añadidas a la cola.",
  SLEEP_START: (seconds: number, time: string) => `Pausa de ${seconds} segundos iniciada: ${time}`,
  SLEEP_END: (seconds: number, time: string) => `Pausa de ${seconds} segundos finalizada: ${time}`,
  RECORD_QUEUE: (campaignId: number, contactName: string, delay: number) =>
    `Registro enviado a la cola de disparo: Campaña=${campaignId};Contacto=${contactName};demora=${delay}`,
  CAMPAIGN_DISPATCH_REQUEST: (campaignId: number, shippingId: number) =>
    `Disparo de campaña solicitado: Campaña=${campaignId};Registro=${shippingId}`,
  CAMPAIGN_SENT_TO: (campaignId: number, contactName: string) =>
    `Campaña enviada a: Campaña=${campaignId};Contacto=${contactName}`,
  LOST_TICKET: (ticketId: number, companyId: number) =>
    `Atención perdida: ${ticketId} - Empresa: ${companyId}`,
  CONDITION_NOT_MET: (companyId: number) => `Condición no respetada - Empresa: ${companyId}`,
  VIRTUAL_ASSISTANT_WAIT:
    "\u200e *Asistente Virtual*:\nEspere mientras localizamos un agente... ¡Será atendido en breve!",
  GENERATING_INVOICES: "GENERANDO FACTURAS...",
  COMPANY_OVERDUE: (companyId: number, days: number) =>
    `EMPRESA: ${companyId} está VENCIDA HACE MÁS DE 3 DÍAS... INACTIVANDO... ${days}`,
  COMPANY_INACTIVATED: (companyId: number) => `EMPRESA: ${companyId} fue DESACTIVADA.`,
  COMPANY_DISCONNECTING: (companyId: number) =>
    `EMPRESA: ${companyId} Desactivando conexiones con WhatsApp...`,
  WHATSAPP_DISCONNECTED: (companyId: number, whatsappId: number) =>
    `EMPRESA: ${companyId} tuvo el WhatsApp ${whatsappId} desconectado...`,
  ERROR_FETCH_WHATSAPP_IDS: "Error al buscar los IDs de WhatsApp:",
  INVOICE_UPDATED: (id: number) => `Factura actualizada ID: ${id}`,
  INVOICE_GENERATED: (companyId: number) => `Factura generada para el cliente: ${companyId}`,
  QUEUE_PROCESSING_START: "Iniciando procesamiento de colas",
  TICKET_UPDATED: (ticketId: number, userId: number, date: Date) =>
    `Ticket ID ${ticketId} actualizado para UserId ${userId} - ${date}`
};

export default messages;
