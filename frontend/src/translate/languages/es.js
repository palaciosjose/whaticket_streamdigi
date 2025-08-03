const messages = {
  es: {
    translations: {
      signup: {
        title: "Registro",
        toasts: {
          success:
            "¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
          fail: "Error creando el usuario. Verifica la data reportada.",
        },
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          password: "Contraseña",
          company: "Nombre de la Empresa",
          phone: "Whatsapp (COD + NÚMERO)",
        },
        buttons: {
          submit: "Regístrate",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Inicio de Sesión",
        form: {
          email: "Correo Electrónico",
          password: "Contraseña",
          button: "Ingresar",
        },
        buttons: {
          submit: "Ingresa",
          register: "¿No tienes cuenta? ¡Regístrate!",
        },
      },
      forgetPassword: {
        title: "Restablecer contraseña",
        form: {
          token: "Código de verificación",
          newPassword: "Nueva contraseña",
          confirmPassword: "Confirma la contraseña",
        },
        buttons: {
          sendEmail: "Enviar correo",
          reset: "Restablecer contraseña",
        },
        toasts: {
          emailSent: "¡Correo enviado con éxito!",
          emailNotFound: "Correo no encontrado",
          passwordReset: "Contraseña restablecida con éxito.",
        },
        validation: {
          invalidEmail: "Correo electrónico inválido",
          required: "Campo obligatorio",
          passwordLength:
            "Tu contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula y un número.",
          passwordMismatch: "Las contraseñas no coinciden",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        dueDate: {
          expiration: "Suscripción caducará en",
          days: "días!",
          day: "día!",
          expirationToday: "Su suscripción termina hoy!",
        },
        token: "Token",
      },
      dashboard: {
        tabs: {
          indicators: "Indicadores",
          assessments: "Evaluaciones",
          attendants: "Agentes",
        },
        charts: {
          perDay: {
            title: "Tickets hoy: ",
          },
        },
        cards: {
          inAttendance: "Atención actual",
          waiting: "Esperando",
          activeAttendants: "Agentes Activos",
          finalized: "Finalizados",
          newContacts: "Nuevos Contactos",
          totalReceivedMessages: "Total de Mensajes Recibidas",
          totalSentMessages: "Total de Mensajes Enviadas",
          averageServiceTime: "T.P. de Atención",
          averageWaitingTime: "T.P. de Espera",
          status: "Status (Actual)",
        },
        users: {
          name: "Nombre",
          numberAppointments: "Total de tickets",
          statusNow: "Actual",
          totalCallsUser: "Total de atención por usuario",
          totalAttendances: "Total de atenciones",
        },
        date: {
          initialDate: "Fecha Inicial",
          finalDate: "Fecha Final",
        },
        licence: {
          available: "Disponíble hasta",
        },
        assessments: {
          totalCalls: "Total de Tickets",
          callsWaitRating: "Tickets esperando evaluación",
          callsWithoutRating: "Ticket sin evaluación",
          ratedCalls: "Tickets evaluados",
          evaluationIndex: "Índice de evaluación",
          score: "Puntaje",
          prosecutors: "Promotores",
          neutral: "Neutrales",
          detractors: "Dectratores",
        },
      },
      reports: {
        title: "Reporte de Encuestas Realizadas",
        operator: "Agente",
        period: "Período",
        until: "Hasta",
        date: "Fecha",
        reportTitle: "Reportes",
        calls: "Atenciones",
        search: "Encuestas",
        durationCalls: "Duración de la atención",
        grupoSessions: "Atención en grupos grupos",
        groupTicketsReports: {
          timezone: "America/Bogota",
          msgToast: "Generando reporte compacto, por favor espere.",
          errorToast: "Error al generar el reporte",
          back: "Volver",
          groupServiceReport: "Reporte de Atención en Grupos",
          loading: "Cargando...",
          contact: "Contacto",
          dateOpen: "Fecha de Apertura",
          dateLastUpdated: "Fecha Ultima Actualización",
          agent: "Agente",
          agentClosed: "Agente(cerró)",
          waitingAssistance: "Esperando atención",
          process: "En proceso",
        },
        researchReports: {
          response: "respuesta",
          active: "(Activa)",
          inactive: "(Inactiva)",
          quantity: "Cantidad",
          percentage: "porcentaje",
          title: "Reporte de Encuestas Realizadas",
          activeSearch: "Encuesta activa",
          inactiveSearch: "Encuesta inactiva",
        },
        ticketDurationDetail: {
          msgToast: "Generando reporte compacto, por favor espere.",
          title: "Reporte de Duración de la Atención",
          startService: "Início de la Atención",
          lastUpdated: "Última actualización",
          lastAgent: "Último agente",
          durationFinished: "Duración después de finalizado",
        },
        ticketDuration: {
          title: "Reporte de Duración de Atención",
          contact: "Contacto",
          open: "Abiertos",
          pending: "Pendientes",
          finished: "Finalizados",
          durationFinished: "Duración de los finalizados",
          durationAfterFinished: "Duración después de finalizado",
          actions: "Acciones",
        },
        ticketReports: {
          msgToast: "Generando reporte compacto, por favor espere.",
          title: "Reporte de Atención",
        },
        pdf: {
          title: "Relación de Atenciones Realizadas",
          exportTitle: "Relación de Atenciones en Grupos Realizadas",
        },
      },
      todo: {
        newTask: "Nueva Tarea",
        add: "Agregar",
        task: "Tareas",
      },
      contactImportWpModal: {
        title: "Exportar Contactos para Excel",
        buttons: {
          downloadModel: "Download - modelo de excel para importación",
          closed: "Cerrar",
          import: "Seleccione el archivo de excel para importar los Contactos",
        },
      },
      contactImport: {
        title: "Importar contactos de archivo",
        validateContact: "Validar contactos en WhatsApp",
        buttons: {
          import: "Importar contactos",
          cancel: "Cancelar",
          back: "Volver",
        },
        messages: {
          importing: "Importando... Espere",
          created: "{{count}} contactos creados",
          ignored:
            "{{count}} contactos ignorados (número inválido o no marcados para actualizar)",
          processing: "Procesando archivo...",
          invalidFile: "Archivo inválido!",
          clickOrDrag: "Haz clic o arrastra un archivo",
          info:
            "* Importante: Archivos sólo con extensiones aceptadas: xls, xlsx, csv, txt",
        },
        toasts: {
          success: "Importación realizada con éxito",
          partial: "Importación realizada con éxito, pero hubo algunos errores",
        },
        errors: {
          noNumberField: "No se seleccionó el campo de número del contacto",
          noNameField: "No se seleccionó el campo de nombre del contacto",
          noContactSelected: "Ningún contacto seleccionado",
          fieldAlreadySelected: "El campo {{field}} ya fue seleccionado.",
        },
        fields: {
          name: "Nombre",
          number: "Número",
          email: "E-mail",
          tags: "Etiquetas",
        },
      },
      listPreview: {
        dialogTitle: "Lista de Botones",
        input: {
          placeholder: "Título Seleccionado",
          ariaLabel: "título seleccionado",
        },
        errors: {
          selectTitle: "Por favor, selecciona un título.",
          ticketIdUndefined: "ticketId no está definido",
          ticketIdNotFound: "Error: ticketId no encontrado.",
          sendMessageError: "Error al enviar el mensaje:",
          sendMessage: "Error al enviar el mensaje. Inténtalo nuevamente.",
        },
      },
      buttonPreview: {
        copied: "¡Código copiado!",
        noContent: "No hay contenido para copiar.",
        noLink: "Ningún enlace disponible.",
        noCall: "No es posible realizar llamadas por el sistema, inténtalo por el celular.",
        noButtons: "Sin botones en esta sección.",
        noSections: "Ninguna sección disponible.",
      },
      connections: {
        title: "Conexiones",
        waitConnection: "Espere... Las conexiones serán reiniciadas!",
        newConnection: "Nueva Conexión",
        restartConnections: "Reiniciar Conexiones",
        callSupport: "Soporte",
        newConnection: "Nueva Conexión",
        toasts: {
          deleted:
            "¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
          disconnected: "¡Conexión desconectada con éxito!",
          closedimported:
            "Estamos cerrando los tickets importados, por favor espere.",
        },
        confirmationModal: {
          closedImportedTitle: "Cerrar tickets importados",
          closedImportedMessage:
            "¿Seguro? Todos los tickets importados seran cerrados.",
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
          disconnectTitle: "Desconectar",
          disconnectMessage: "Estás seguro? Deberá volver a leer el código QR",
        },
        buttons: {
          add: "Agrega WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Inténtalo de nuevo",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          closedImported: "Cerrar todos los tickets Importados",
          preparing: "Preparando mensajes para importación",
          importing: "Importando Mensajes del WhatsApp",
          newQr: "Nuevo QR CODE",
          processed: "Procesado",
          in: "de",
          connecting: "Conectando",
        },
        typography: {
          processed: "Procesado",
          in: "de",
          date: "Fecha del mensaje",
        },
        toolTips: {
          disconnected: {
            title: "No se pudo iniciar la sesión de WhatsApp",
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando la lectura del código QR",
            content:
              "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida",
          },
          timeout: {
            title: "Se perdió la conexión con el teléfono celular",
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última Actualización",
          default: "Por Defecto",
          actions: "Acciones",
          session: "Sesión",
          number: "Número de Whatsapp",
        },
      },
      showTicketOpenModal: {
        title: {
          header: "Servicio existente",
        },
        form: {
          message: "Hay un ticket abierto para este contacto:",
          user: "Agente",
          queue: "Fila",
          messageWait: "Este contacto ya está en espera.",
        },
      },
      showTicketLogModal: {
        title: {
          header: "Historico",
        },
        options: {
          create: "Ticket creado.",
          chatBot: "ChatBot iniciado.",
          queue: " - Fila definida.",
          open: "iniciou la atención.",
          access: "accesó el ticket.",
          transfered: "transferió el ticket.",
          receivedTransfer: "recibió el ticket transferido.",
          pending: "regresó a la fila.",
          closed: "cerró el ticket",
          reopen: "abrió el ticket",
        },
      },
      whatsappModal: {
        title: {
          add: "Agrega WhatsApp",
          edit: "Edita WhatsApp",
        },
        tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "Evaluaciones",
          integrations: "Integraciones",
          schedules: "Horario de trabajo",
        },
        form: {
          importOldMessagesEnable: "Importar mensajes del celular",
          importOldMessages: "Fecha de inicio",
          importRecentMessages: "Fecha Final",
          importOldMessagesGroups: "Importar mensajes de grupo",
          closedTicketsPostImported: "Cerrar tickets después de la importación",
          name: "Nombre",
          queueRedirection: "Redirección de Fila",
          queueRedirectionDesc:
            "Seleccione una fila para los contactos que no tienen una fila para redirigir",
          default: "Por Defecto",
          group: "Permitir grupos",
          timeSendQueue: "Tiempo en minutos para redireccionar a la fila",
          importAlert:
            "ATENCIÓN: Guardando, su conexión será cerrada, usted tendrá que volver a leer el QR Code para importar los mensajes",
          groupAsTicket: "Grupos como Ticket",
          timeCreateNewTicket: "Iniciar un nuevo ticket en *n* minutos",
          maxUseBotQueues:
            "Cantidad máxima de veces que el chatbot va a ser enviado",
          timeUseBotQueues: "Tiempo en minutos para nuevo envío del chatbot",
          expiresTicket: "Cerrar chats abiertos após *n* horas",
          expiresTicketNPS:
            "Cerrar chats en espera de la evaluación luego de x minutos",
          maxUseBotQueuesNPS:
            "Cantidad máxima de veces que la evaluación será enviada",
          closeLastMessageOptions1: "Del Agente/Cliente",
          closeLastMessageOptions2: "Del Agente",
          outOfHoursMessage: "Mensaje fuera de horario de atención",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de conclusión",
          lgpdLinkPrivacy: "Link para políticas de privacidad",
          lgpdMessage: "Mensaje inicial de LPD",
          lgpdDeletedMessages: "Ofuscar mensaje borrada por el contacto",
          lgpdSendMessage: "Siempre solicitar confirmación del contacto",
          ratingMessage: "Mensaje de evaluación - Rango de 0 a 10",
          token: "Token para integración externa",
          sendIdQueue: "Fila",
          inactiveMessage: "Mensaje de inactividad",
          timeInactiveMessage:
            "Tiempo em minutos para el envío del aviso de inactividad",
          whenExpiresTicket:
            "Cerrar chats abiertos cuando el último mensaje sea",
          expiresInactiveMessage: "Mensaje al cerrar por inactividade",
          prompt: "Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        menuItem: {
          enabled: "Activado",
          disabled: "Desactivado",
          minutes: "minutos",
        },
        success: "WhatsApp guardado satisfactoriamente.",
        errorSendQueue:
          "Además del tiempo debes seleccinar una fila para redireccionar. Se necesitan los dos campos.",
        errorExpiresNPS:
          "Es necesario llenar el tiempo para la evaluación para el NPS.",
      },
      qrCode: {
        message: "Lée el código QR para empezar la sesión.",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto borrado satisfactoriamente!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar",
          importTitlte: "Importar contactos",
          exportContact: "Exportar contactos",
          deleteMessage:
            "¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
          blockContact: "¿Estás seguro que quieres bloquear este contacto?",
          unblockContact:
            "¿Estás seguro que quieres desbloquear este contacto?",
          importMessage: "¿Quieres importar todos los contactos del teléfono?",
          importChat: "Importar Conversaciones",
          wantImport:
            "¿Quieres importar todas las conversaciones del teléfono?",
        },
        buttons: {
          import: "Importar Contactos",
          add: "Agregar Contacto",
          export: "Exportar Contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo Electrónico",
          actions: "Acciones",
          lastMessage: "Ultimo Mensaje",
        },
        menu: {
          importYourPhone: "Importar del celular por default",
          importToExcel: "Importar / Exportar del Excel",
        },
      },
      forwardMessage: {
        text: "Reenviada",
      },
      forwardMessageModal: {
        title: "Reenviar mensaje",
        buttons: {
          ok: "Reenviar",
        },
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensajes del Historico",
          voiceKey: "Llave de la API de la Voz",
          voiceRegion: "Región de la Voz",
        },
        success: "Prompt guardado",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Fila",
          max_tokens: "Máximo Tokens Respuestas",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Detalles del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Correo Electrónico",
          extraName: "Nombre del Campo",
          extraValue: "Valor",
          chatBotContact: "Desactivar chatbot para este contacto",
          termsLGDP: "Términos P.P. aceptados en:",
          allTicket: "Visualizar tickets sin fila",
          allowGroup: "Permitir grupos",
        },
        buttons: {
          addExtraInfo: "Agregar información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado satisfactoriamente.",
      },
      queueModal: {
        title: {
          queueData: "Datos de la fila",
          text: "Horarios de atención",
          add: "Agregar fila",
          edit: "Editar fila",
          confirmationDelete:
            "¿Está seguro? Todas las opciones integradas también se eliminarán.",
        },
        form: {
          name: "Nombre",
          color: "Color",
          orderQueue: "Orden de la fila (Bot)",
          rotate: "Rotativo",
          timeRotate: "Tiempo de Rotación",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de cierre",
          outOfHoursMessage: "Mensaje fuera de horario de atención",
          token: "Token",
          integrationId: "Integración",
          fileListId: "Listado de archivos",
          closeTicket: "Cerrar ticket",
          queueType: "Tipo de menu",
          message: "Mensaje de respuesta",
          queue: "Fila para transferencia",
          integration: "Integración",
          file: "Listado de archivos",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        bot: {
          title: "Opciones",
          toolTipTitle: "Agregue las opciones para construir un chatbot",
          toolTip:
            "Si solo hay una opción, se elegirá automáticamente, lo que hará que el bot responda con el mensaje de la opción y avance.",
          selectOption: "Seleccione una opción",
          text: "Texto",
          attendent: "Agente",
          queue: "Fila",
          integration: "Integranción",
          file: "Archivo",
          toolTipMessageTitle:
            "El mensaje es obligatorio para pasar al siguiente nivel",
          toolTipMessageContent:
            "El mensaje es obligatorio para pasar al siguiente nivel",
          selectUser: "Seleccione un Usuario",
          selectQueue: "Seleccione una Fila",
          selectIntegration: "Seleccione um Integración",
          addOptions: "Agregar opciones",
        },
        serviceHours: {
          dayWeek: "Día",
          startTimeA: "Hora de Inicio",
          endTimeA: "Hora del término",
          startTimeB: "Hora de Inicio",
          endTimeB: "Hora del término",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sabado",
          sunday: "Domingo",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversación",
          typebotKeywordFinish: "Palabra para finalizar la conversación",
          typebotUnknownMessage: "Mensaje de opción invalida",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "¡Integración testada con éxito!",
          addSuccess: "¡Integración agregada con éxito!",
          editSuccess: "¡Integración editada con éxito!",
        },
      },
      userModal: {
        warning:
          "Para importar los mensajes por favor vuelva a leer el QRCode.",
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
          updateImage: "Actualizar Imagen",
          removeImage: "Eliminar Imagen",
        },
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          password: "Contraseña",
          farewellMessage: "Mensaje de despedida",
          profile: "Perfil",
          startWork: "Inicio del Horario",
          endWork: "Final del Horario",
          whatsapp: "Conexión Defautl",
          allTicketEnable: "Activado",
          allTicketDisable: "Desactivado",
          allTicket: "Visualizar mensajes sin fila",
          allowGroup: "Permitir Grupos",
          defaultMenuOpen: "Abierto",
          defaultMenuClosed: "Cerrado",
          defaultMenu: "Menu Estándar",
          defaultTheme: "Tema Estándar",
          defaultThemeDark: "Oscuro",
          defaultThemeLight: "Claro",
          allHistoric: "Ver historicos",
          allHistoricEnabled: "Activado",
          allHistoricDisabled: "Desactivado",
          allUserChat: "Ver conversación de otros usuarios",
          userClosePendingTicket: "Permitir cerrar tickets pendientes",
          showDashboard: "Ver Dashboard",
        },
        tabs: {
          general: "General",
          permissions: "Permisos",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          addImage: "Agregar Imagen",
          editImage: "Editar Imagen",
        },
        success: "Usuario guardado satisfactoriamente.",
      },
      companyModal: {
        title: {
          add: "Agregar empresa",
          edit: "Editar empresa",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          passwordDefault: "Contraseña",
          numberAttendants: "Usuarios",
          numberConections: "Conexiones",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "La Empresa fue guardada satisfactoriamente.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo Programa",
          edit: "Editar Programa",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha del Programa",
          sentAt: "Fecha de Envío",
          assinar: "Enviar Firma",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Programa guardado satisfactoriamente.",
      },
      messageModal: {
        title: {
          add: "Nuevo Mensaje",
          edit: "Editar Mensaje",
        },
        success: {
          save: "Mensaje guardado con éxito.",
        },
        recurrenceTitle: "Recurrencia",
        recurrenceInfo:
          "Puedes elegir enviar el mensaje de forma recurrente y elegir el intervalo. Si es un mensaje que se enviará una única vez, no cambies nada en esta sección.",
      },
      tagModal: {
        title: {
          add: "Nueva Tag",
          edit: "Editar Tag",
          addKanban: "Nueva Lane",
          editKanban: "Editar Lane",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Tag guardada satisfactoriamente.",
        successKanban: "Lane guardada satisfactoriamente.",
      },
      fileModal: {
        title: {
          add: "Agregar menú de evaluación",
          edit: "Editar menú de evaluación",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre",
          message: "Mensaje de Evaluación",
          options: "Opciones de Evaluación",
          extraName: "Nombre de la opción",
          extraValue: "Valor de la opción",
        },
        success: "Evaluación guardada satisfactoriamente.",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para empezar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop:
            "⬇️ ARRASTRE Y SUELTE LOS ARCHIVOS EN EL CAMPO ⬇️",
          titleFileList: "Listado de archivo(s)",
        },
      },
      chatInternal: {
        new: "Nuevo",
        modal: {
          conversation: "Inicio",
          title: "Título",
          filterUsers: "Filtro por Usuarios",
          cancel: "Cerrar",
          save: "Guardar",
        },
        modalDelete: {
          title: "Eliminar Chat",
          message: "Esta acción no se puede revertir, ¿confirmar?",
        },
      },
      ticketsManager: {
        questionCloseTicket: "¿Quieres cerrar todos los tickets?",
        yes: "SI",
        not: "NO",
        buttons: {
          newTicket: "Nuevo",
          resolvAll: "Resolver Todos",
          close: "Cerrar",
          new: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SI",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resueltos",
        },
        toasts: {
          deleted: "El ticket en el que estabas ha sido borrado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Bandeja" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar tickets y mensajes.",
          filterConections: "Filtro por Conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendiente",
          },
          filterUsers: "Filtro por usuarios",
        },
        buttons: {
          showAll: "Todos",
          returnQueue: "Regresar a la Fila",
          scredule: "Programar",
          deleteTicket: "Borrar Ticket",
          quickmessageflash: "Mensaje Rápido",
        },
        closedTicket: {
          closedMessage: "Cerrar CON un mensaje de despedida",
          closedNotMessage: "Cerrar SIN un mensaje de despedida",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Seleccione una fila",
        fieldWhatsapp: "Seleccione un whatsapp",
        noOptions: "No se encontraron usuarios con ese nombre",
        msgTransfer:
          "Observación - los mensajes internos, no serán visualizados por el cliente.",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      chatInternal: {
        new: "Nuevo",
        modal: {
          conversation: "Conversación",
          title: "Título",
          filterUsers: "Filtro por Usuarios",
          cancel: "Cerrar",
          save: "Guardar",
        },
        modalDelete: {
          title: "Eliminar Conversación",
          message: "Esta acción no se puede revertir, ¿confirmar?",
        },
      },
      ticketsList: {
        called: "Entradas",
        today: "Hoy",
        missedCall: "Llamada de voz/vídeo perdida a las",
        pendingHeader: "Esperando",
        assignedHeader: "Trabajando en",
        groupingHeader: "Grupos",
        noTicketsTitle: "¡Nada acá!",
        noTicketsMessage:
          "No se encontraron tickets con este estado o término de búsqueda",
        noQueue: "Sin Fila",
        buttons: {
          accept: "Aceptar",
          cancel: "Cancelar",
          start: "Iniciar",
          closed: "Cerrar",
          reopen: "Reabrir",
          transfer: "Transferir",
          ignore: "Ignorar",
          exportAsPDF: "Exportar para PDF",
        },
        acceptModal: {
          title: "Aceptar Chat",
          queue: "Seleccionar tag",
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escribe para buscar un contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      SendContactModal: {
        title: "Enviar contacto",
        fieldLabel: "Buscar contacto",
        add: "Agregar",
        buttons: {
          ok: "Enviar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          chatsTempoReal: "Panel de Asistencia",
          tickets: "Inbox",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Filas",
          tags: "Tags",
          administration: "Administración",
          companies: "Empresas",
          users: "Usuarios",
          settings: "Configuración",
          ratings: "Regist. Evaluaciones",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Programa",
          campaigns: "Campañas",
          annoucements: "Informativos",
          chats: "Chat Interno",
          financeiro: "Financiero",
          queueIntegration: "Integraciones",
          version: "Versión",
          kanban: "Kanban",
          prompts: "Talk.Ai",
          allConnections: "Admin conexiones",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Cerrar Sesión",
            message: "Hola",
            messageEnd: "bienvenido a",
            active: "Activo hasta",
            goodMorning: "Hola,",
            myName: "mi nombre es",
            continuity: "y te seguiré apoyando.",
            virtualAssistant: "Asistente Virtual",
            token:
              "Token inválido, favor comunicarse con el administrador de la plataforma.",
          },
          message: {
            location: "Localización",
            contact: "Contacto",
          },
          notRegister: "No hay registros",
          refresh: "Actualizar",
        },
      },
      languages: {
        undefined: "Idioma",
        "pt-BR": "Portugués",
        "es-CO": "Español (Colombia)",
        "es-ES": "Español (España)",
        "es-MX": "Español (México)",
        "es-US": "Español (Estados Unidos)",
        es: "Español",
        en: "Inglés",
        tr: "Turco",
      },
      voices: {
        "es-CO-SalomeNeural": "Salomé",
        "es-CO-GonzaloNeural": "Gonzalo",
        "es-MX-DaliaNeural": "Dalia",
        "es-MX-JorgeNeural": "Jorge",
        "es-ES-ElviraNeural": "Elvira",
        "es-ES-AlvaroNeural": "Álvaro",
        "es-US-JennyNeural": "Jenny",
        "es-US-GuyNeural": "Guy",
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
          userId: "ID usuario/agente",
          queueId: "ID Fila",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado",
        },
        API: {
          title: "Documentación para envío de mensajes",
          methods: {
            title: "Métodos de Envío",
            messagesText: "Mensajes de Texto",
            messagesMidia: "Mensajes de Midia",
          },
          instructions: {
            title: "Instrucciones",
            comments: "Observaciones Importantes",
            comments1:
              "Antes de enviar mensajes, es necesario registrar el token vinculado a la conexión que enviará los mensajes. <br />Para registrarse, acceda al menú 'Conexiones', haga clic en el botón de edición de la conexión e inserte el token en el campo correspondiente.",
            comments2:
              "El número de envío no debe tener máscara ni caracteres especiales y debe constar de:",
            codeCountry: "Código del País",
            code: "Código del Estado",
            number: "Numero",
          },
          text: {
            title: "1. Mensajes de Texto",
            instructions:
              "A continuación se muestra la lista de información necesaria para enviar mensajes de texto:",
          },
          media: {
            title: "2. Mensagens de Media",
            instructions:
              "A continuación se muestra la lista de información necesaria para enviar mensajes con archivos:",
          },
        },
      },
      notifications: {
        noTickets: "Sin notificaciones.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "No hay",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir. ¿Continuar?",
        },
        buttons: {
          add: "Agregar",
          attach: "Adjuntar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "Atajo agregado satisfactoriamente.",
          deleted: "Atajo eliminado satisfactoriamente.",
        },
        dialog: {
          title: "Mensaje Rápida",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          geral: "Global",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir visión",
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Nombre del Archivo",
          status: "Status",
        },
      },
      contactLists: {
        title: "Listado de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Listado",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nuevo",
          lists: "Listados",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo electrónico",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo electrónico",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Quieres importar esta plantilla? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      kanban: {
        title: "Kanban",
        searchPlaceholder: "Búsqueda",
        subMenus: {
          list: "Admin",
          tags: "Lanes",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Búsqueda",
        subMenus: {
          list: "Listados",
          listContacts: "Listados de contactos",
          settings: "Configuraciones",
        },
        settings: {
          randomInterval: "Intervalo de disparo aleatorio",
          noBreak: "Sin Intervalo",
          intervalGapAfter: "Intervalo mayor después de",
          undefined: "No definido",
          messages: "mensajes",
          laggerTriggerRange: "Intervalo de envío más grande",
          addVar: "Agregar variable",
          save: "Guardar",
          close: "Cerrar",
          add: "Agregar",
          shortcut: "Atajo",
          content: "Contenido",
        },
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listado de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Listado de Contactos",
          option: "Ninguna",
          disabled: "Desactivada",
          enabled: "Activada",
          status: "Status",
          scheduledAt: "Programa",
          completedAt: "Finalizada",
          confirmation: "Confirmación",
          actions: "Acciones",
          noContactList: "No definida",
          noWhatsapp: "No definido",
          noSchedule: "Sin programación",
          notFinished: "No finalizada",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Solo Visualizar",
          help: "Use variables como {nombre}, {numero}, {email} o defina variables personalizadas.",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del Mensaje",
            whatsapp: "Conexión",
            status: "Status",
            scheduledAt: "Programa",
            confirmation: "Confirmación",
            contactList: "Listado de Contacto",
            tagList: "Tags",
            statusTicket: "Status del Ticket",
            openTicketStatus: "Abierto",
            closedTicketStatus: "Cerrado",
            enabledOpenTicket: "Activado",
            disabledOpenTicket: "Desactivado",
            openTicket: "Abrir ticket",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Envíos",
            restart: "Reiniciar Envíos",
            close: "Cerrar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Acción realizada satisfactoriamente",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado",
          noPermission:
            "¡Esta empresa no tiene permiso para acceder a esta página! Te estamos redirigiendo.",
        },
      },
      campaignReport: {
        title: "Reporte de",
        inactive: "Inactiva",
        scheduled: "Programada",
        process: "En Proceso",
        cancelled: "Cancelada",
        finished: "Finalizada",
        campaign: "Campaña",
        validContacts: "Contactos Válidos",
        confirmationsRequested: "Confirmaciones Solicitadas",
        confirmations: "Confirmaciones",
        deliver: "Entregadas",
        connection: "Conexión",
        contactLists: "Listado de Contactos",
        schedule: "Programados",
        conclusion: "Conclusión",
      },
      announcements: {
        title: "Boletines",
        searchPlaceholder: "Búsqueda",
        active: "Activo",
        inactive: "Inactivo",
        buttons: {
          add: "Nuevo Boletin",
          contactLists: "Listados de Boletines",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Status",
          actions: "Acciones",
        },
        dialog: {
          edit: "Editar Boletin",
          add: "Nuevo Boletin",
          update: "Editar Boletin",
          readonly: "Solo visualizar",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Status",
            high: "Alta",
            medium: "Mediana",
            low: "Baja",
            active: "Activo",
            inactive: "Inactivo",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Acción realizada satisfactoriamente",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
      },
      queues: {
        title: "Filas",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          orderQueue: "Orden de la fila (bot)",
          actions: "Acciones",
          ID: "ID",
        },
        buttons: {
          add: "Agregar fila",
        },
        toasts: {
          success: "Fila guardada",
          deleted: "Fila eliminada",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa fila seguirán existiendo, pero ya no tendrán ninguna fila asignada.",
        },
      },
      queue: {
        queueData: "Datos",
      },
      queueSelect: {
        inputLabel: "Filas",
        inputLabelRO: "Filas solo para lectura",
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          lastUpdate: "Ultima actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Se eliminarán las filas y conexiones enlazadas",
        },
      },
      users: {
        title: "Usuarios",
        table: {
          status: "Status",
          name: "Nombre",
          email: "Correo Electrónico",
          profile: "Perfil",
          startWork: "Inicio del trabajo",
          endWork: "Final de trabajo",
          actions: "Acciones",
          ID: "ID",
        },
        buttons: {
          add: "Agregar usuario",
        },
        toasts: {
          deleted: "Usuario borrado satisfactoriamente.",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la fila.",
        },
      },
      compaies: {
        title: "Empresas",
        table: {
          ID: "ID",
          status: "Activo",
          name: "Nombre",
          email: "Correo",
          password: "Contraseña",
          phone: "Teléfono",
          plan: "Plan",
          active: "Activo",
          numberAttendants: "Agentes",
          numberConections: "Conexiones",
          value: "Valor",
          namePlan: "Nombre del Plan",
          numberQueues: "Filas",
          useCampaigns: "Campañas",
          useExternalApi: "Rest API",
          useFacebook: "Facebook",
          useInstagram: "Instagram",
          useWhatsapp: "Whatsapp",
          useInternalChat: "Chat Interno",
          useSchedules: "Programa",
          createdAt: "F.Creación",
          dueDate: "Caducidad",
          lastLogin: "Ult. Login",
          actions: "Acciones",
          money: "MXN",
          yes: "Sí",
          no: "No",
          document: "CURP/RFC",
          recurrence: "Recurencia",
          monthly: "Mensual",
          bimonthly: "Bimestral",
          quarterly: "Trimestral",
          semester: "Semestral",
          yearly: "Anual",
          clear: "Limpiar",
          delete: "Eliminar",
          user: "Usuario",
          save: "Guardar",
        },
        buttons: {
          add: "Agregar empresa",
        },
        toasts: {
          success: "Operación realizada con éxito!",
          error: "No fue posible realizar la operación.",
          duplicated:
            "No fue posible realizar la operación. Verifique si ya existe una empresa con el mismo nombre o si los campos fueron completados correctamente.",
          loadError: "No fue posible cargar la lista de registros.",
          deleted: "Empresa eliminada satisfactoriamente.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar Registro",
          deleteMessage: "¿Desea realmente eliminar este registro?",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programas",
          enabled: "Activada",
          disabled: "Desactivada",
          clear: "Limpiar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "MXN",
          queues: "Filas",
          value: "Valor",
          whatsapp: "Whatsapp",
          facebook: "Facebook",
          instagram: "Instagram",
          internalChat: "Chat Interno",
          externalApi: "API Externa",
          kanban: "Kanban",
          openAi: "Talk.Ai",
          integrations: "Integraciones",
        },
        toasts: {
          success: "Operación realizada con éxito!",
          error: "No fue posible realizar la operación.",
          duplicated:
            "No fue posible realizar la operación. Verifique si ya existe un plan con el mismo nombre o si los campos fueron completados correctamente.",
          loadError: "No fue posible cargar la lista de registros.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar Registro",
          deleteMessage: "¿Desea realmente eliminar este registro?",
        },
      },
      helps: {
        title: "Ayuda",
        settings: {
          title: "Título",
          codeVideo: "Código del Video",
          description: "Descripción",
          clear: "Limpiar",
          delete: "Eliminar",
          save: "Guardar",
        },
        toasts: {
          success: "Operación realizada con éxito!",
          error: "No fue posible realizar la operación.",
          duplicated:
            "No fue posible realizar la operación. Verifique si ya existe una ayuda con el mismo nombre o si los campos fueron completados correctamente.",
          loadError: "No fue posible cargar la lista de registros.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar Registro",
          deleteMessage: "¿Desea realmente eliminar este registro?",
        },
      },
      contactNotes: {
        toasts: {
          added: "Nota agregada con éxito!",
          deleted: "Nota eliminada con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Eliminar Registro",
          deleteMessage: "¿Desea realmente eliminar este registro?",
        },
      },
      schedules: {
        title: "Programas",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres eliminar este Programa?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha del Programa",
          sentAt: "Fecha de Envío",
          status: "Status",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Programa",
        },
        toasts: {
          deleted: "Programa eliminado satisfactoriamente.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres eliminar esta Tag?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          kanban: "Kanban",
          color: "Color",
          tickets: "Registros Tags",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Tag",
        },
        toasts: {
          deleted: "Tag eliminada satisfactoriamente.",
        },
      },
      tagsKanban: {
        title: "Lanes",
        laneDefault: "Abierto(s)",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres eliminar esta Lane?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Tickets",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lane",
        },
        toasts: {
          deleted: "Lane eliminada satisfactoriamente.",
        },
      },
      files: {
        title: "Listado de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acción",
        },
        toasts: {
          deleted: "Listado borrado satisfactoriamente!",
          deletedAll: "Todos los listados fueron borrados satisfactoriamente!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Borrar Todos",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteAllTitle: "Borrar Todos",
          deleteMessage: "Estás seguro de borrar este listado?",
          deleteAllMessage: "Estás seguro de borrar todos los listado?",
        },
      },
      settings: {
        success: "Configuración guardada satisfactoriamente.",
        title: "Configuración",
        toasts: {
          updated: "Operación actualizada con éxito.",
        },
        tabs: {
          options: "Opciones",
          plans: "Planes",
          helps: "Ayuda",
        },
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          tabs: {
            options: "Opciones",
            schedules: "Horarios",
            plans: "Planes",
            help: "Ayuda",
          },
          options: {
            disabled: "Desactivadas",
            enabled: "Activadas",
            updating: "Actualizando...",
            creationCompanyUser: "Creación de Empresa/Usuario",
            evaluations: "Evaluaciones",
            officeScheduling: "Programar horarios",
            queueManagement: "Gestionar por Fila",
            companyManagement: "Gestionar por Empresa",
            connectionManagement: "Gestionar por Conexión",
            sendGreetingAccepted: "Enviar saludos al aceptar ticket",
            sendMsgTransfTicket:
              "Enviar mensaje de transferencia (departamento/agente)",
            checkMsgIsGroup: "Ignorar mensajes de Grupos",
            chatBotType: "Tipo de Bot",
            userRandom: "Escojer agente aleatorio",
            buttons: "Botones",
            acceptCallWhatsapp: "No aceptar llamada en el whatsapp",
            sendSignMessage: "Permitir agente escoger ENVIAR Firma",
            sendGreetingMessageOneQueues:
              "Enviar saludos cuando hay solamente 1 fila",
            sendQueuePosition: "Enviar mensaje con la posición de la fila",
            sendFarewellWaitingTicket:
              "Enviar mensaje de despedida(estado Esperando)",
            acceptAudioMessageContact: "Aceptar audios de todos",
            enableLGPD: "Habilitar opción P.P.",
            requiredTag: "Tag obligatoria para cerrar ticket",
            closeTicketOnTransfer: "Cerrar ticket al transferir para otra fila",
            DirectTicketsToWallets:
              "Mover automaticamente cliente para cartera",
          },
          LGPD: {
            title: "Politica de Privacidad",
            welcome: "Mensaje de bienvenida (PP)",
            linkLGPD: "Link de la política de privacidad",
            obfuscateMessageDelete: "Ofuscar mensaje borrada",
            alwaysConsent: "Requerir siempre el consentimiento",
            obfuscatePhoneUser: "Ofuscar número de telefono para usuarios",
            enabled: "Activado",
            disabled: "Desactivado",
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          dialogRatingTitle:
            "¿Quieres dejar un mensaje de evaluación para el cliente?",
          dialogClosingTitle: "Finalizando la atención al cliente!",
          dialogRatingCancel: "Cerrar CON Mensaje de Despedida",
          dialogRatingSuccess: "Cerrar y Enviar Evaluación",
          dialogRatingWithoutFarewellMsg: "Cerrar SIN Mensaje de Despedida",
          ratingTitle: "Elegir menú de evaluación",
          notMessage: "No hay mensaje seleccionado",
          buttons: {
            return: "Devolver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
            rating: "Enviar Evaluación",
            enableIntegration: "Activar/Desactivar integración",
            logTicket: "Logs del Ticket",
          requiredTag:
            "Opps! Debes asignar una tag antes de cerrar el ticket.",
          },
        },
        youReacted: "Reaccionaste...",
        fbPolicyWarning:
          "Tienes 24h para responder después de recibir un mensaje, de acuerdo con las políticas de Facebook.",
      },
      messagesInput: {
        placeholderPrivateMessage:
          "Entre como un mensaje o con / para respuestas rápidas",
        placeholderOpen:
          "Entre como un mensaje o con / para respuestas rápidas",
        placeholderClosed:
          "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
        signMessage: "Firmar",
        privateMessage: "Mensaje Privada",
      },
      contactDrawer: {
        header: "Detalles del contacto",
        buttons: {
          edit: "Editar contacto",
          block: "Bloquear",
          unblock: "Desbloquear",
        },
        extraInfo: "Otras informaciones",
        confirmationModal: {
          blockTitle: "Bloquear contacto",
          unblockTitle: "Desbloquear contacto",
          blockMessage:
            "¿Realmente deseas bloquear este contacto? No recibirás más mensajes de él.",
          unblockMessage:
            "¿Realmente deseas desbloquear este contacto? Volverás a recibir mensajes de él.",
        },
      },
      flowBuilder: {
        title: "Flujos de conversación",
        buttons: {
          add: "Agregar Flujo",
        },
        table: {
          status: "Status",
        },
        list: {
          createdAt: "Creado el:",
        },
        status: {
          active: "Activo",
          inactive: "Desactivado",
        },
        toasts: {
          deleted: "Flujo eliminado con éxito",
          duplicated: "Flujo duplicado con éxito",
        },
        confirmationModal: {
          deleteTitle: "¿Desea eliminar el flujo {{name}}?",
          deleteMessage:
            "¿Está seguro de que desea eliminar este flujo? Todas las integraciones relacionadas se perderán.",
          duplicateTitle: "¿Desea duplicar el flujo {{name}}?",
          duplicateMessage: "¿Está seguro de que desea duplicar este flujo?",
        },
        menu: {
          editName: "Editar nombre",
          editFlow: "Editar flujo",
          duplicate: "Duplicar",
          delete: "Eliminar",
        },
      },
      flowBuilderConfig: {
        messages: {
          rememberToSave: "¡No te olvides de guardar tu flujo!",
        },
        toasts: {
          saved: "Flujo guardado exitosamente.",
          exported: "Flujo exportado exitosamente.",
          imported: "Flujo importado exitosamente.",
        },
      },
      flowBuilderSingleBlockModal: {
        toasts: {
          emptyMessage: "¡Campo de mensaje vacío!",
          invalidInterval: "¡El intervalo no puede ser 0 o mayor a 120!",
          fileTooBig2: "¡El archivo es muy grande! Máximo 2MB",
          fileTooBig5: "¡El archivo es muy grande! Máximo 5MB",
          fileTooBig20: "¡El archivo es muy grande! Máximo 20MB",
          success: "¡Contenido agregado con éxito!",
          deleteEmptyCards:
            "Elimine las tarjetas vacías (Imagen, Audio y Video)",
        },
      },
      flowBuilderAddImgModal: {
        toasts: {
          added: "¡Imagen agregada con éxito!",
          fileTooBig2: "¡El archivo es muy grande! Máximo 2MB",
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          user: "Agente",
          greeting: "Saludos",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
          ticket_id: "Nº del Ticket",
          queue: "Sector",
          connection: "Conexión",
        },
      },
      ticketOptionsMenu: {
        schedule: "Programa",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        resolveWithNoFarewell: "Cerrar sin despedida",
        acceptAudioMessage: "¿Aceptar audios del contacto?",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Agregue aqui la información",
        },
        confirmationModal: {
          title: "¿Borrar ticket #",
          titleFrom: "del contacto ",
          message:
            "¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageInput: {
        tooltip: {
          signature: "Activar/Desactivar firma",
          privateMessage: "Activar/Desactivar mensaje privado",
          meet: "Enviar link para videollamada",
        },
        type: {
          imageVideo: "Fotos y videos",
          cam: "Cámara",
          contact: "Contacto",
          meet: "Link Jitsi Meet",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
        edit: "Editar",
        forward: "Enviar",
        toForward: "Enviar",
        talkTo: "Platicar Con",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no puede ser revertida.",
        },
      },
      invoices: {
        table: {
          invoices: "Facturas",
          details: "Detalles",
          users: "Usuarios",
          connections: "Conexiones",
          queue: "Filas",
          value: "Valor",
          expirationDate: "Fecha Venc.",
          action: "Acción",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP:
          "Debe haber al menos una conexión de WhatsApp predeterminada.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuarios fue deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND:
          "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una fila.",
        ERR_OUT_OF_HOURS: "¡Fuera del horario de oficina!",
      },
    },
  },
};

export { messages };
