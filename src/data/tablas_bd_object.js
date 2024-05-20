export const tablas_bd = [
    {
        tableName: 'roles_usuario_sistema',
        tableDescription: 'Contiene los tipos de roles que tendra cada usuario de nuestro sistema de administracion y segun el tipo de rol sera el tipo de permisos que tiene para ingresar y operar en el sistema. Se proyecta tener user_dev, user_premium,user_admin,user_recepcion,user_medico,user_paciente,user_empleado.',
        tableFields: [
            { nameField: 'id_user_rol', type: 'VARCHAR(30)', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'identificacion del tipo de usuario del sistema.' },
            { nameField: 'rol', type: 'VARCHAR(30)', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Nombre del rol. Se utilice un ID ya que al rol podriamos decidir cambiarle el nombre eventualmente.' }
        ],
        tablePK: 'categoria',
        tablesFKs: []
    },
    {
        tableName: 'roles_empleados',
        tableDescription: 'Contiene los tipos de Roles de Empleados que existen en el consultorio en las distintas areas con lo cual mas adelante cruzaremos informacion y a cada empleado segun su rol vamos a darle un distinto tipo de usuario para el sistema.',
        tableFields: [
            { nameField: 'id_funcion', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'Identificacion del tipo de funcion.' },
            { nameField: 'funcion', type: 'VARCHAR(30)', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Nombre de la funcion. Se utilice un ID ya que podriamos decidir cambiarle el nombre eventualmente a una determinada funcion.'  }
        ],
        tablePK: 'id_funcion',
        tablesFKs: []
    },
    {
        tableName: 'estados_turnos',
        tableDescription: 'Tabla de Estados de Turnos',
        tableFields: [
            { nameField: 'id_estado_turno', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'Identificador del estado del turno' },
            { nameField: 'estado_turno', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'Descripción del estado del turno, la cual podria cambiar a travez del tiempo. Tambien podriamos sumar nuevas.' }
        ],
        tablePK: 'id_estado_turno',
        tablesFKs: []
    },
    {
        tableName: 'prestaciones',
        tableDescription: 'Contiene los tipos de prestaciones de obra social y planes que estaran disponibles. De este modo podremos alimentar desde nuestro backend a nuestro frontend para que el usuario del sistema elija la prestacion con la cual se llevara a cabo la atencion por parte del medico. Si bien es cierto que podriamos tener aparte una tabla obras sociales es practico por el momento manejarlo de esta manera ya que de otra forma habria que trabajar con APIS de obras sociales y por el momento no es suficiente trabajar con este metodo. Tambien contiene esta tabla un campo llamado -activa- que es un boolean que indicara si en el momento de otorgar el turno o hacer la prestacion la misma se encuentra activa.',
        tableFields: [
            { nameField: 'id_prestacion', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'identificacion del tipo de prestacion.' },
            { nameField: 'obra_social', type: 'VARCHAR(255)', conditions: null, primaryKey: false, fieldDescription: 'Nombre de obra social asociada.' },
            { nameField: 'plan', type: 'VARCHAR(255)', conditions: null, primaryKey: false, fieldDescription: 'Plan de obra social asociado.' },
            { nameField: 'activa', type: 'BOOLEAN', conditions: null, primaryKey: false, fieldDescription: 'Estado de la prestacion, la misma puede o no, estar activa en un momento determinado.' }
        ],
        tablePK: 'id_prestacion',
        tablesFKs: []
    },
    {
        tableName: 'consultorios',
        tableDescription: 'Contiene el listado de consultorios existentes y la informacion de si estan disponibles o no en el momento que se necesite tener esa informacion cuando ingresa un medico y necesita se le asigne su lugar de trabajo del dia.',
        tableFields: [
            { nameField: 'numero_consultorio', type: 'INT', conditions: null, primaryKey: true, fieldDescription: 'Identificacion de consultorio' },
            { nameField: 'en_servicio', type: 'BOOLEAN', conditions: null, primaryKey: false, fieldDescription: 'Indica si el consultorio se encuntra en uso o no, en un momento determinado. Tal vez mas adelante se podria escalar, cambiar el tipo de campo y ponerle estados como por ejemplo -en limpieza,reparacion,etc-.' }
        ],
        tablePK: 'numero_consultorio',
        tablesFKs: []
    },
    {
        tableName: 'especialidades',
        tableDescription: 'Contiene el listado de especialidades de medicos.',
        tableFields: [
            { nameField: 'id_especialidad', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'Identificacion de la especialidad.' },
            { nameField: 'nombre', type: 'VARCHAR(100)', conditions: null, primaryKey: false, fieldDescription: 'Nombre de la especialidad de medicos. Ejemplo Kinesiologia, Pediatria, etc.' }
        ],
        tablePK: 'id_especialidad',
        tablesFKs: []
    },
    {
        tableName: 'datos_personales',
        tableDescription: 'Esta tabla contiene los datos personales de todas las personas ya sea puedan operar o no en el sistema. Tiene los datos personales de pacientes, medicos, empleados, etc.',
        tableFields: [
            { nameField: 'dni', type: 'VARCHAR(30)', conditions: 'NOT NULL', primaryKey: true, fieldDescription: 'Identificacion de una persona, es un dni por lo tanto es unico.' },
            { nameField: 'nombre1', type: 'VARCHAR(255)', conditions: null, primaryKey: false, fieldDescription: 'Primer nombre.' },
            { nameField: 'nombre2', type: 'VARCHAR(255)', conditions: null, primaryKey: false, fieldDescription: '2do nombre.' },
            { nameField: 'apellido', type: 'VARCHAR(255)', conditions: null, primaryKey: false, fieldDescription: 'Apellido.' },
            { nameField: 'fecha_nacimiento', type: 'DATE', conditions: null, primaryKey: false, fieldDescription: 'Fecha de nacimiento.' },
            { nameField: 'direccion', type: 'VARCHAR(255)', conditions: null, primaryKey: false, fieldDescription: 'Domicilio calle/altura. Por ahora se queda asi, se proyecta para mas adelante tener un string con las coordenadas para google maps.' },
            { nameField: 'codigo_postal', type: 'VARCHAR(10)', conditions: null, primaryKey: false, fieldDescription: 'Codigo postal del domicilio, no se ingresa localidad ya que podemos mas adelante saberla a travez de un API simplemente teniendo el CP.' },
            { nameField: 'telefono_contacto_1', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'Telefono de contacto.' },
            { nameField: 'telefono_contacto_2', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'Telefono de contacto.' },
            { nameField: 'telefono_contacto_urgencia', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'Telefono de contacto por casos de urgencia durante la estadia de los pacientes en el consultorio.' },
            { nameField: 'email_contacto', type: 'VARCHAR(254)', conditions: null, primaryKey: false, fieldDescription: 'Email de contacto, si bien podriamos utilizar el del usuario del sistema puede ser que un paciente o usuario no utilice el sistema por lo cuial es conveniente tener un email de contacto.' },
        ],
        tablePK: 'dni',
        tablesFKs: []
    },
    {
        tableName: 'usuarios_sistema',
        tableDescription: 'Esta tabla contiene los usuarios registrados en nuestro sistema de gestion del consultorio y que podran hacer gestiones a travez de nuestro sistema.',
        tableFields: [
            { nameField: 'dni', type: 'VARCHAR(30)', conditions: 'NOT NULL', primaryKey: true, fieldDescription: 'DNI del usuario. Un usuario por dni unicamente.' },
            { nameField: 'email', type: 'VARCHAR(254)', conditions: null, primaryKey: false, fieldDescription: 'Email asociado al usuario el cual podria ser modificado si el usuario a futuro deseara usar otro email.' },
            { nameField: 'contraseña', type: 'VARCHAR(24)', conditions: null, primaryKey: false, fieldDescription: 'Contraseña hasheada de ingreso al sistema.' },
            { nameField: 'rol', type: 'int', conditions: null, primaryKey: false, fieldDescription: 'Tipo de usuario del sistema, de acuerdo al rol se asignan los permisos para operar en las distintas partes del sistema.' },
            { nameField: 'habilitado', type: 'BOOLEAN', conditions: null, primaryKey: false, fieldDescription: 'Este campo indica si el usuario esta habilitado o no para utilizar el sistema.' }
        ],
        tablePK: 'dni',
        tablesFKs: [
            { field: 'rol', toTable: 'roles_usuario_sistema', toField: 'id_rol' }
        ]
    },
    {
        tableName: 'empleados',
        tableDescription: 'Contiene el listado de empleados de nuestra empresa, su legajo, que funcion cumple, su dni.',
        tableFields: [
            { nameField: 'legajo_empleado', type: 'VARCHAR(10)', conditions: null, primaryKey: true, fieldDescription: 'Legajo del empleado. Su identificacion como empleado de la empresa.' },
            { nameField: 'dni', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'DNI para asociar con sus datos personales en la tabla datos personales.' },
            { nameField: 'id_funcion', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'ID de la funcion que cumple asociado a la tabla roles_empleados para la identificacion de la tarea que cumple.' }
        ],
        tablePK: 'legajo_empleado',
        tablesFKs: [
            { field: 'dni', toTable: 'datos_personales', toField: 'dni' },
            { field: 'id_funcion', toTable: 'roles_empleados', toField: 'id_funcion' }
        ]
    },
    {
        tableName: 'medicos',
        tableDescription: 'Contiene el listado de medicos de nuestra empresa, su legajo y especialidad.',
        tableFields: [
            { nameField: 'legajo_medico', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'Legajo del medico. Su identificacion como medico de la empresa.' },
            { nameField: 'dni', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'DNI para asociar con sus datos personales en la tabla datos personales.' },
            { nameField: 'id_especialidad', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'ID de la especialidad del medico el cual se asocia a la tabla especialidades.' }
        ],
        tablePK: 'legajo_medico',
        tablesFKs: [
            { field: 'dni', toTable: 'datos_personales', toField: 'dni' },
            { field: 'id_especialidad', toTable: 'especialidades', toField: 'id_especialidad' }
        ]
    },
    {
        tableName: 'pacientes',
        tableDescription: 'Contiene el listado de pacientes registrados en nuestra empresa, su legajo, y dni para ser asociado a la tabla de datos personales.',
        tableFields: [
            { nameField: 'legajo_paciente', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'Legajo de identificacion como paciente de los consulorios.' },
            { nameField: 'dni', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'DNI para asociar con sus datos personales en la tabla datos personales.' }
        ],
        tablePK: 'legajo_paciente',
        tablesFKs: [
            { field: 'dni', toTable: 'datos_personales', toField: 'dni' }
        ]
    },
    {
        tableName: 'registros_historias_clinicas',
        tableDescription: 'Cada registro de esta tabla es un registro del medico cuando atiende a un paciente y deja registro de diagnostico,observaciones,medicacion. Luego Si queremos obtener la historia clinica de un paciente determinado filtramos por su legajo y obtenemos toda su historia clinica completa.',
        tableFields: [
            { nameField: 'id_registro', type: 'INT', conditions: 'AUTO_INCREMENT', primaryKey: true, fieldDescription: 'Identificacion de cada registro de historia clinica.' },
            { nameField: 'legajo_medico', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'Legajo del medico que escribira el registro.' },
            { nameField: 'legajo_paciente', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'Legajo del paciente atendido por el medico que hace el registro.' },
            { nameField: 'diagnostico', type: 'TEXT', conditions: null, primaryKey: false, fieldDescription: 'Descripcion del diagnostico, a futuro sera asociado con una tabla diagnosticos.' },
            { nameField: 'observaciones', type: 'TEXT', conditions: null, primaryKey: false, fieldDescription: 'Observaciones' },
            { nameField: 'medicacion', type: 'TEXT', conditions: null, primaryKey: false, fieldDescription: 'Descripcion de medicacion proscrita en la cita.' },
            { nameField: 'fecha_hora', type: 'DATETIME', conditions: null, primaryKey: false, fieldDescription: 'Fecha y hora en que se realiza el registro.' }
        ],
        tablePK: 'id_registro',
        tablesFKs: [
            { field: 'legajo_medico', toTable: 'medicos', toField: 'legajo_medico' },
            { field: 'legajo_paciente', toTable: 'pacientes', toField: 'legajo_paciente' }
        ]
    },
    {
        tableName: 'turnos_otorgados',
        tableDescription: 'En esta tabla se registraran los turnos que se otorgaran, que paciente, para que medico, posible prestacion, y estado del turno el cual ira cambiando desde que es otorgado hasta que llega, se anuncia el paciente o en su defecto si es cancelado o reprogramado.',
        tableFields: [
            { nameField: 'id_turno', type: 'VARCHAR(30)', conditions: null, primaryKey: true, fieldDescription: 'Identificacion del turno la cual estara dada por la combinacion del año, el dia giuliano y numero de turno otorgado en el dia. Mas adelante se ejecutara un thrigger antes de la insercion para generar el ID correspondiente.' },
            { nameField: 'legajo_medico', type: 'INT', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Legajo del medico que atendera el turno.' },
            { nameField: 'legajo_paciente', type: 'INT', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Legajo del paciente que otorgara el turno.' },
            { nameField: 'fecha_hora_reservada', type: 'DATETIME', conditions: null, primaryKey: false, fieldDescription: 'Fecha y hora para la cita medica. Seguramente desde el backend se maneje la insercion de este valor ya que existe la necesidad de crear un algoritmo para gestionar la ocupacion de turnos.' },
            { nameField: 'id_prestacion_tentativa', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'Identificacion de la prestacion con la cual se llevara adelante la consulta. Es tentativa porque es posible que al momento del turno la prestacion no este activa y haya que cambiarla.' },
            { nameField: 'fecha_hora_otorgamiento', type: 'DATETIME', conditions: null, primaryKey: false, fieldDescription: 'Fecha y hora en que se otorga el turno para tener un seguimiento del mismo.' },
            { nameField: 'dni_otorgante_turno', type: 'VARCHAR(30)', conditions: null, primaryKey: false, fieldDescription: 'DNI de quien otorga el turno para poder cruzar datos con tabla usuarios_sistema y tener registro si el turno fue dado por un empleado en una recepcion o por un paciente a travez del sistema.' },
            { nameField: 'estado_turno', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'Estado del turno asociado a la tabla estados_turno.' },
            { nameField: 'consultorio_asignado', type: 'INT', conditions: null, primaryKey: false, fieldDescription: 'Consultorio en el cual se llevara a cabo la consulta. Este campo obtendra un valor cuando el paciente llega a la recepcion, se anuncia y se confirma por cual consultorio sera atendido.' },
        ],
        tablePK: 'id_turno',
        tablesFKs: [
            { field: 'legajo_medico', toTable: 'medicos', toField: 'legajo_medico' },
            { field: 'legajo_paciente', toTable: 'pacientes', toField: 'legajo_paciente' },
            { field: 'id_prestacion_tentativa', toTable: 'prestaciones', toField: 'id_prestaciones' },
            { field: 'estado_turno', toTable: 'estados_turno', toField: 'id_estado_turno' },
            { field: 'consultorio_asignado', toTable: 'consultorios', toField: 'numero_consultorio' },
        
        ]
    },
    {
        tableName: 'ocupacion_consultorios',
        tableDescription: 'Tabla de Ocupación de Consultorios para llevar un registro del uso de los mismos, su limpieza y manteniento.',
        tableFields: [
            { nameField: 'id_ocupacion', type: 'VARCHAR(30)', conditions: 'NOT NULL', primaryKey: true, fieldDescription: 'Identificador de la ocupación' },
            { nameField: 'legajo_medico', type: 'INT', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Legajo del médico' },
            { nameField: 'numero_consultorio', type: 'INT', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Número del consultorio' },
            { nameField: 'fecha_hora_inicio', type: 'DATETIME', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Fecha y hora de inicio de la ocupación' },
            { nameField: 'fecha_hora_fin', type: 'DATETIME', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Fecha y hora de fin de la ocupación' }
        ],
        tablePK: 'id_ocupacion',
        tablesFKs: [
            { field: 'legajo_medico', toTable: 'medicos', toField: 'legajo_medico' },
            { field: 'numero_consultorio', toTable: 'consultorios', toField: 'numero_consultorio' }
        ]
    },
    {
        tableName: 'registro_visitas_pacientes',
        tableDescription: 'Tabla de Registro de Visitas de Pacientes en Recepción',
        tableFields: [
            { nameField: 'id_visita', type: 'VARCHAR(20)', conditions: 'NOT NULL', primaryKey: true, fieldDescription: 'Identificador de la visita' },
            { nameField: 'id_turno', type: 'VARCHAR(30)', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Identificador del turno otorgado' },
            { nameField: 'consultorio_asignado', type: 'INT', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Número de consultorio asignado' },
            { nameField: 'prestacion_efectiva', type: 'INT', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'ID de la prestación efectiva' },
            { nameField: 'fecha_hora_anuncio', type: 'DATETIME', conditions: 'NOT NULL', primaryKey: false, fieldDescription: 'Fecha y hora de anuncio de la visita' },
            { nameField: 'fecha_hora_ingreso_consultorio', type: 'DATETIME', conditions: null, primaryKey: false, fieldDescription: 'Fecha y hora de ingreso al consultorio' },
            { nameField: 'fecha_hora_egreso_consultorio', type: 'DATETIME', conditions: null, primaryKey: false, fieldDescription: 'Fecha y hora de egreso del consultorio' }
        ],
        tablePK: 'id_visita',
        tablesFKs: [
            { field: 'id_turno', toTable: 'turnos_otorgados', toField: 'id_turno' },
            { field: 'consultorio_asignado', toTable: 'consultorios', toField: 'numero_consultorio' },
            { field: 'prestacion_efectiva', toTable: 'prestaciones', toField: 'id_prestacion' }
        ]
    }
];
