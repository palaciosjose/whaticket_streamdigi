import { Table, Column, CreatedAt, UpdatedAt, Model, PrimaryKey, AutoIncrement, DataType, BelongsTo, ForeignKey, HasMany, AllowNull, Default } from "sequelize-typescript";
import Contact from "./Contact";
import Tag from "./Tag";

@Table
class ScheduledMessages extends Model<ScheduledMessages> {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    data_mensagem_programada: Date;

    @Column(DataType.INTEGER)
    id_conexao: number;

    @Column(DataType.INTEGER)
    intervalo: number;

    @Column(DataType.INTEGER)
    valor_intervalo: number;

    @Column(DataType.TEXT)
    mensagem: string;

    @Column
    tipo_dias_envio: string;

    @Default(false)
    @Column
    mostrar_usuario_mensagem: boolean;

    @Default(false)
    @Column
    criar_ticket: boolean;

    @Column({ type: DataType.JSONB })
    contatos: String[];

    @Column({ type: DataType.JSONB })
    tags: String[];

    @Column
    companyId: number;

    @Column
    nome: string;

    @Default("PENDENTE")
    @Column
    status: string;

    @Column
    sentAt: Date;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @Column
    mediaPath: string;

    @Column
    mediaName: string;

    @Column
    tipo_arquivo: string;

    @Column
    usuario_envio: string;

    @Column(DataType.INTEGER)
    enviar_quantas_vezes: number;

}

export default ScheduledMessages;
