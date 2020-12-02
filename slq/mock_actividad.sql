insert into 
  Test.actividad (
    nombre, 
    fecha_inicio, 
    fecha_fin, 
    descripcion
  )
values
  ( 
    'Documentos 2019', 
    STR_TO_DATE('2019-10-01', '%Y-%m-%d'),
    STR_TO_DATE('2019-10-21', '%Y-%m-%d'),
    'Docuemtos del año 2019'
  );

insert into 
  Test.actividad (
    nombre, 
    fecha_inicio, 
    fecha_fin, 
    descripcion
  )
values
  ( 
    'Imagenes 2019', 
    STR_TO_DATE('2019-03-01', '%Y-%m-%d'),
    STR_TO_DATE('2019-04-01', '%Y-%m-%d'),
    'Imagenes del año 2019'
  );

insert into 
  Test.actividad (
    nombre, 
    fecha_inicio, 
    fecha_fin, 
    descripcion
  )
values
  ( 
    'Todo 2020', 
    STR_TO_DATE('2020-06-01', '%Y-%m-%d'),
    STR_TO_DATE('2019-06-03', '%Y-%m-%d'),
    'Todo año 2020'
  );
