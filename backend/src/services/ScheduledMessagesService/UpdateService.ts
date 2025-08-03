import * as Yup from "yup";

import AppError from "../../errors/AppError";
import ScheduledMessages from "../../models/ScheduledMessages";
import ShowService from "./ShowService";

interface ScheduleData {
  data_mensagem_programada: Date;
  id_conexao: number;
  intervalo: number;
  valor_intervalo: number;
  mensagem: string;
  tipo_dias_envio: string;
  mostrar_usuario_mensagem: boolean;
  criar_ticket: boolean;
  contatos: string[];
  tags: string[];
  companyId: number;
  nome: string;
  tipo_arquivo: string;
  usuario_envio: string;
  enviar_quantas_vezes: number;
  mediaName: string;
  mediaPath: string;
}

interface Request {
  scheduleData: ScheduleData;
  id: string | number;
  mediaPath: string | null,
  mediaName: string | null,
}

const UpdateService = async ({
  scheduleData,
  id,
  mediaPath,
  mediaName,
}: Request): Promise<ScheduledMessages | undefined> => {
  const schedule = await ShowService(id);

  const {
    data_mensagem_programada,
    id_conexao,
    intervalo,
    valor_intervalo,
    mensagem,
    tipo_dias_envio,
    mostrar_usuario_mensagem,
    criar_ticket,
    contatos,
    tags,
    nome,
    tipo_arquivo,
    usuario_envio,
    enviar_quantas_vezes,
  } = scheduleData;

  const schema = Yup.object().shape({
    data_mensagem_programada: Yup.date().required(),
    nome: Yup.string().required(),
    intervalo: Yup.number().required(),
    valor_intervalo: Yup.number().required(),
    mensagem: Yup.string().required(),
    tipo_dias_envio: Yup.string().required(),
    mostrar_usuario_mensagem: Yup.boolean().required(),
    criar_ticket: Yup.boolean().required(),
    enviar_quantas_vezes: Yup.number().required(),
    mediaPath: Yup.string().nullable(),
    mediaName: Yup.string().nullable(),
    tipo_arquivo: Yup.string().nullable(),
    usuario_envio: Yup.string().nullable(),
    id_conexao: Yup.number().required()
  });

  try {
    await schema.validate({
      data_mensagem_programada,
      id_conexao,
      intervalo,
      valor_intervalo,
      mensagem,
      tipo_dias_envio,
      mostrar_usuario_mensagem,
      criar_ticket,
      nome,
      mediaPath,
      mediaName,
      tipo_arquivo,
      usuario_envio,
      enviar_quantas_vezes
    });
  } catch (err: any) {
    throw new AppError(err.message);
  }

  let data = {
    data_mensagem_programada,
    id_conexao,
    intervalo,
    valor_intervalo,
    mensagem,
    tipo_dias_envio,
    mostrar_usuario_mensagem,
    criar_ticket,
    contatos: String(contatos).split(','),
    tags: String(tags).split(','),
    nome,
    tipo_arquivo,
    usuario_envio: mostrar_usuario_mensagem ? usuario_envio : null,
    enviar_quantas_vezes
  } as ScheduleData;


  if (!!mediaName && !!mediaPath) {
    data.mediaName = mediaName;
    data.mediaPath = mediaPath;
  }

  await schedule.update(data);

  await schedule.reload();
  return schedule;
};

export default UpdateService;
