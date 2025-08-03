import UpdateService from "../UpdateService";
import ShowService from "../ShowService";

jest.mock("../ShowService");

describe("ScheduledMessages UpdateService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should update schedule with provided fields", async () => {
    const update = jest.fn();
    const reload = jest.fn();
    (ShowService as jest.Mock).mockResolvedValue({ update, reload });

    const scheduleData = {
      data_mensagem_programada: new Date(),
      id_conexao: "1",
      intervalo: "1",
      valor_intervalo: "1",
      mensagem: "msg",
      tipo_dias_envio: "day",
      mostrar_usuario_mensagem: true,
      criar_ticket: true,
      contatos: [],
      tags: [],
      companyId: 1,
      nome: "test",
      tipo_arquivo: "text",
      usuario_envio: "user",
      enviar_quantas_vezes: "1",
      mediaName: "",
      mediaPath: ""
    } as any;

    await UpdateService({ scheduleData, id: 1, mediaPath: null, mediaName: null });

    expect(update).toHaveBeenCalledWith(
      expect.objectContaining({
        mostrar_usuario_mensagem: true,
        usuario_envio: "user"
      })
    );
  });

  it("should nullify usuario_envio when mostrar_usuario_mensagem is false", async () => {
    const update = jest.fn();
    const reload = jest.fn();
    (ShowService as jest.Mock).mockResolvedValue({ update, reload });

    const scheduleData = {
      data_mensagem_programada: new Date(),
      id_conexao: "1",
      intervalo: "1",
      valor_intervalo: "1",
      mensagem: "msg",
      tipo_dias_envio: "day",
      mostrar_usuario_mensagem: false,
      criar_ticket: true,
      contatos: [],
      tags: [],
      companyId: 1,
      nome: "test",
      tipo_arquivo: "text",
      usuario_envio: "user",
      enviar_quantas_vezes: "1",
      mediaName: "",
      mediaPath: ""
    } as any;

    await UpdateService({ scheduleData, id: 1, mediaPath: null, mediaName: null });

    expect(update).toHaveBeenCalledWith(
      expect.objectContaining({
        mostrar_usuario_mensagem: false,
        usuario_envio: null
      })
    );
  });
});

