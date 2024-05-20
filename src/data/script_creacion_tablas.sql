CREATE DATABASE administracionconsultorios;
USE administracionconsultorios;

CREATE TABLE roles_usuario_sistema(
    id_user_rol INT AUTO_INCREMENT,
    rol VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_user_rol)
);

CREATE TABLE roles_empleados(
    id_funcion INT AUTO_INCREMENT,
    funcion VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_funcion)
);

-- Tabla de estados turnos.
CREATE TABLE estados_turnos (
    id_estado_turno INT,
    estado_turno VARCHAR(30),
    PRIMARY KEY (id_estado_turno)
);

-- Tabla de Prestaciones
CREATE TABLE prestaciones (
    id_prestacion INT AUTO_INCREMENT,
    obra_social VARCHAR(255),
    plan VARCHAR(255),
    activa BOOLEAN,
    PRIMARY KEY (id_prestacion)
);

-- Tabla de Consultorios
CREATE TABLE consultorios (
    numero_consultorio INT,
    en_servicio BOOLEAN,
    PRIMARY KEY (numero_consultorio)
);

-- Tabla especialidades
CREATE TABLE especialidades (
    id_especialidad INT AUTO_INCREMENT,
    nombre VARCHAR(100),
    PRIMARY KEY (id_especialidad)
);

-- Tabla de Datos Personales
CREATE TABLE datos_personales (
    dni VARCHAR(30) NOT NULL,
    nombre1 VARCHAR(255),
    nombre2 VARCHAR(255),
    apellido VARCHAR(255),
    fecha_nacimiento DATE,
    direccion VARCHAR(255),
    codigo_postal VARCHAR(10),
    telefono_contacto_1 VARCHAR(30),
    telefono_contacto_2 VARCHAR(30),
    telefono_contacto_urgencia VARCHAR(30),
    email_contacto VARCHAR(254),
    PRIMARY KEY (dni)
);



-- Tabla de Usuarios del Sistema
CREATE TABLE usuarios_sistema (
    dni VARCHAR(30) NOT NULL,
    email VARCHAR(254),
    contraseña VARCHAR(24),
    rol INT,
    habilitado BOOLEAN,
    PRIMARY KEY (dni),
    FOREIGN KEY (dni) REFERENCES datos_personales(dni),
    FOREIGN KEY (rol) REFERENCES roles_usuario_sistema(id_user_rol)
);


-- Tabla de Empleados
CREATE TABLE empleados (
    legajo_empleado VARCHAR(10),
    dni VARCHAR(30),
    id_funcion INT,
    PRIMARY KEY (legajo_empleado),
    FOREIGN KEY (dni) REFERENCES datos_personales(dni),
    FOREIGN KEY (id_funcion) REFERENCES roles_empleados(id_funcion)
 );

 -- Tabla de Médicos
CREATE TABLE medicos (
    legajo_medico INT AUTO_INCREMENT,
    dni VARCHAR(30),
    id_especialidad INT,
    PRIMARY KEY (legajo_medico),
    FOREIGN KEY (dni) REFERENCES datos_personales(dni),
    FOREIGN KEY (id_especialidad) REFERENCES especialidades(id_especialidad)
);


-- Tabla de Pacientes
CREATE TABLE pacientes (
    legajo_paciente INT AUTO_INCREMENT,
    dni VARCHAR(30),
    PRIMARY KEY (legajo_paciente),
    FOREIGN KEY (dni) REFERENCES datos_personales(dni)
);


-- Tabla de Ocupación de Consultorios
CREATE TABLE registros_historias_clinicas (
    id_registro INT AUTO_INCREMENT,
    legajo_medico INT,
    legajo_paciente INT,
    diagnostico TEXT,
    observaciones TEXT,
    medicacion TEXT,
    fecha_hora DATETIME,
    PRIMARY KEY (id_registro),
    FOREIGN KEY (legajo_medico) REFERENCES medicos(legajo_medico),
    FOREIGN KEY (legajo_paciente) REFERENCES pacientes(legajo_paciente)
);


-- Tabla de Anuncios en Recepción
CREATE TABLE turnos_otorgados (
    id_turno VARCHAR(30),
    legajo_medico INT NOT NULL,
    legajo_paciente INT NOT NULL,
    fecha_hora_reservada DATETIME,
    id_prestacion_tentativa INT,
    fecha_hora_otorgamiento DATETIME,
    dni_otorgante_turno VARCHAR(30),
    estado_turno INT,
    consultorio_asignado INT,
    PRIMARY KEY (id_turno),
    FOREIGN KEY (legajo_medico) REFERENCES medicos(legajo_medico),
    FOREIGN KEY (legajo_paciente) REFERENCES pacientes(legajo_paciente),
    FOREIGN KEY (id_prestacion_tentativa) REFERENCES prestaciones(id_prestacion),
    FOREIGN KEY (estado_turno) REFERENCES estados_turnos(id_estado_turno),
    FOREIGN KEY (consultorio_asignado) REFERENCES consultorios(numero_consultorio)
);

-- Tabla de Ocupación de Consultorios
CREATE TABLE ocupacion_consultorios (
    id_ocupacion VARCHAR(30),
    legajo_medico INT NOT NULL,
    numero_consultorio INT NOT NULL,
    fecha_hora_inicio DATETIME NOT NULL,
    fecha_hora_fin DATETIME NOT NULL,
    PRIMARY KEY (id_ocupacion),
    FOREIGN KEY (legajo_medico) REFERENCES medicos(legajo_medico),
    FOREIGN KEY (numero_consultorio) REFERENCES consultorios(numero_consultorio)
);

-- Tabla de Anuncios en Recepción
CREATE TABLE registro_visitas_pacientes (
    id_visita VARCHAR(20),
    id_turno VARCHAR(30), 
    consultorio_asignado INT,
    prestacion_efectiva INT,
    fecha_hora_anuncio DATETIME,
    fecha_hora_ingreso_consultorio DATETIME,
    fecha_hora_egreso_consultorio DATETIME,
    PRIMARY KEY (id_visita),
    FOREIGN KEY (id_turno) REFERENCES turnos_otorgados(id_turno), 
    FOREIGN KEY (consultorio_asignado) REFERENCES consultorios(numero_consultorio),
    FOREIGN KEY (prestacion_efectiva) REFERENCES prestaciones(id_prestacion)
);

