import Queue from "../models/Queue";
import Company from "../models/Company";
import User from "../models/User";
import jwt from "jsonwebtoken";

interface SerializedUser {
  id: number;
  name: string;
  email: string;
  profile: string;
  companyId: number;
  company: Company | null;
  super: boolean;
  queues: Queue[];
  startWork: string;
  endWork: string;
  allTicket: string;
  whatsappId: number;
  profileImage: string;
  defaultTheme: string;
  defaultMenu: string;
  allHistoric: string;
  allUserChat?: string;
  defaultTicketsManagerWidth?: number;
  userClosePendingTicket?: string;
  showDashboard?: string;
  token?: string;
  allowGroup: boolean;
  allowRealTime: string;
  allowConnections: string;
}

export const SerializeUser = async (user: User): Promise<SerializedUser> => {
  // Genera un token de 32 bytes
  const generateToken = (userId: number | string): string => {
    // Generar el token basándose en el userId y su clave secreta
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    }); // Puedes definir el tiempo de expiración según sea necesario
    return token;
  };

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    profile: user.profile,
    companyId: user.companyId,
    company: user.company,
    super: user.super,
    queues: user.queues,
    startWork: user.startWork,
    endWork: user.endWork,
    allTicket: user.allTicket,
    whatsappId: user.whatsappId,
    profileImage: user.profileImage,
    defaultTheme: user.defaultTheme,
    defaultMenu: user.defaultMenu,
    allHistoric: user.allHistoric,
    allUserChat: user.allUserChat,
    defaultTicketsManagerWidth: user.defaultTicketsManagerWidth,
    userClosePendingTicket: user.userClosePendingTicket,
    showDashboard: user.showDashboard,
    token: generateToken(user.id),
    allowGroup: user.allowGroup,
    allowRealTime: user.allowRealTime,
    allowConnections: user.allowConnections
  };
};
