CREATE TABLE actividad(  
  id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
  nombre VARCHAR(255) NOT NULL ,
  fecha_inicio DATETIME COMMENT 'inicio de la actividad',
  fecha_fin DATETIME COMMENT 'fin de la actividad',
  descripcion varchar(255)
) default charset utf8 comment '';

CREATE TABLE multimedia(  
  id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
  id_actividad int,
  nombre VARCHAR(255) NOT NULL,
  fecha DATETIME,
  descripcion varchar(255),
  archivo VARCHAR(255) NOT NULL,
  tipo ENUM('PHOTO', 'VIDEO', 'AUDIO', 'FILE') NOT NULL,
  FOREIGN KEY (id_actividad)
      REFERENCES actividad(id)
      ON UPDATE CASCADE ON DELETE CASCADE
) default charset utf8 comment '';