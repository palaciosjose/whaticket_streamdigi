export const calculateNextSendDate = (
  sendAt: Date,
  intervalo: number,
  valor_intervalo: number
): Date => {
  const nextDate = new Date(sendAt);
  switch (intervalo) {
    case 1:
      nextDate.setDate(nextDate.getDate() + valor_intervalo);
      break;
    case 2:
      nextDate.setDate(nextDate.getDate() + valor_intervalo * 7);
      break;
    case 3:
      nextDate.setMonth(nextDate.getMonth() + valor_intervalo);
      break;
    case 4:
      nextDate.setMinutes(nextDate.getMinutes() + valor_intervalo);
      break;
    default:
      throw new Error("INVALID_INTERVAL");
  }
  return nextDate;
};

export const shouldScheduleAgain = (
  contadorEnvio: number | null | undefined,
  enviar_quantas_vezes: number,
  valor_intervalo: number
): boolean => {
  return (
    valor_intervalo > 0 &&
    (contadorEnvio == null || contadorEnvio < enviar_quantas_vezes)
  );
};
