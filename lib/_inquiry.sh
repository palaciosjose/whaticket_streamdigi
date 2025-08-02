#!/bin/bash

# get_mysql_root_password() {
  
#   print_banner
#   printf "${WHITE} 💻 Introduzca la contraseña para el usuario Deploy y la base de datos (no utilice caracteres especiales):${GRAY_LIGHT}"
#   printf "\n\n"
#   read -p "> " mysql_root_password
# }

# get_link_git() {
  
#   print_banner
#   printf "${WHITE} 💻 Introduzca el enlace de GitHub de la instalación que desea instalar:${GRAY_LIGHT}"
#   printf "\n\n"
#   read -p "> " link_git
# }

get_instancia_add() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese un nombre para la Instancia/Empresa que se instalará (no utilice espacios ni caracteres especiales; use letras minúsculas):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " instancia_add
}

get_max_whats() {
  
  print_banner
  printf "${WHITE} 💻 Indique la cantidad de Conexiones/Whats que ${instancia_add} podrá registrar:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " max_whats
}

get_max_user() {
  
  print_banner
  printf "${WHITE} 💻 Indique la cantidad de Usuarios/Atendentes que ${instancia_add} podrá registrar:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " max_user
}

get_frontend_url() {
  
  print_banner
  printf "${WHITE} 💻 Introduzca el dominio del FRONTEND/PANEL para ${instancia_add}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " frontend_url
}

get_backend_url() {
  
  print_banner
  printf "${WHITE} 💻 Introduzca el dominio del BACKEND/API para ${instancia_add}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " backend_url
}

get_frontend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto del FRONTEND para ${instancia_add}; Ej: 3000 a 3999 ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " frontend_port
}


get_backend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto del BACKEND para esta instancia; Ej: 4000 a 4999 ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " backend_port
}

get_redis_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto de REDIS/PROGRAMACIÓN DE MSG para ${instancia_add}; Ej: 5000 a 5999 ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " redis_port
}

get_empresa_delete() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el nombre de la Instancia/Empresa que será eliminada (utilice el mismo nombre que cuando la instaló):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_delete
}

get_empresa_atualizar() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el nombre de la Instancia/Empresa que desea actualizar (utilice el mismo nombre que cuando la instaló):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_atualizar
}

get_empresa_bloquear() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el nombre de la Instancia/Empresa que desea bloquear (utilice el mismo nombre que cuando la instaló):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_bloquear
}

get_empresa_desbloquear() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el nombre de la Instancia/Empresa que desea desbloquear (utilice el mismo nombre que cuando la instaló):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_desbloquear
}

get_empresa_dominio() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el nombre de la Instancia/Empresa para la que desea cambiar los dominios (atención: para cambiar los dominios debe ingresar ambos, incluso si solo modificará uno):${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " empresa_dominio
}

get_alter_frontend_url() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el NUEVO dominio del FRONTEND/PANEL para ${empresa_dominio}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_frontend_url
}

get_alter_backend_url() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el NUEVO dominio del BACKEND/API para ${empresa_dominio}:${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_backend_url
}

get_alter_frontend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto del FRONTEND de la Instancia/Empresa ${empresa_dominio}; el puerto debe ser el mismo informado durante la instalación ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_frontend_port
}


get_alter_backend_port() {
  
  print_banner
  printf "${WHITE} 💻 Ingrese el puerto del BACKEND de la Instancia/Empresa ${empresa_dominio}; el puerto debe ser el mismo informado durante la instalación ${GRAY_LIGHT}"
  printf "\n\n"
  read -p "> " alter_backend_port
}


get_urls() {
  # get_mysql_root_password
  # get_link_git
  get_instancia_add
  get_max_whats
  get_max_user
  get_frontend_url
  get_backend_url
  get_frontend_port
  get_backend_port
  get_redis_port
}

# software_update() {
#   get_empresa_atualizar
#   frontend_update
#   backend_update
# }

software_delete() {
  get_empresa_delete
  deletar_tudo
}

software_bloquear() {
  get_empresa_bloquear
  configurar_bloqueio
}

software_desbloquear() {
  get_empresa_desbloquear
  configurar_desbloqueio
}

software_dominio() {
  get_empresa_dominio
  get_alter_frontend_url
  get_alter_backend_url
  get_alter_frontend_port
  get_alter_backend_port
  configurar_dominio
}

inquiry_options() {
  
  print_banner
  printf "${WHITE} 💻 Bienvenido(a) a Whaticket SaaS 7.0V, ¡Seleccione la próxima acción!${GRAY_LIGHT}"
  printf "\n\n"
  printf "   [1] Instalar Whaticket SaaS 7.0V \n"
  # printf "   [1] Actualizar Whaticket SaaS \n"
  printf "   [2] Eliminar Whaticket SaaS 7.0V \n"
  printf "   [3] Bloquear Whaticket SaaS 7.0V \n"
  printf "   [4] Desbloquear Whaticket SaaS 7.0V \n"
  printf "   [5] Cambiar dominio de Whaticket SaaS 7.0V \n"
  printf "\n"
  read -p "> " option

  case "${option}" in
    1) get_urls ;;

    # 1) 
    #   software_update 
    #   exit
    #   ;;

    2) 
      software_delete 
      exit
      ;;
    3) 
      software_bloquear 
      exit
      ;;
    4) 
      software_desbloquear 
      exit
      ;;
    5) 
      software_dominio 
      exit
      ;;        

    *) exit ;;
  esac
}


