CREATE TABLE `actividad` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL COMMENT 'inicio de la actividad',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `multimedia` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `id_actividad` int DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha` datetime DEFAULT NULL COMMENT 'creación del multimedia',
  `descripcion` varchar(255) DEFAULT NULL,
  `archivo` varchar(255) NOT NULL,
  `tipo` enum('PHOTO','VIDEO','AUDIO','FILE') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_actividad` (`id_actividad`),
  CONSTRAINT `multimedia_ibfk_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividad` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;