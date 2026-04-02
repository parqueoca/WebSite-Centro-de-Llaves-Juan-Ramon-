# Supabase Database Schema

## Table: clientes
- id: uuid (primary key, default: gen_random_uuid())
- nombre: text (required)
- telefono: text (required)
- fecha_creacion: timestamp with time zone (default: now())

## Table: solicitudes
- id: uuid (primary key, default: gen_random_uuid())
- cliente_id: uuid (foreign key to clientes.id)
- tipo_servicio: text (required) - 'automotriz', 'residencial', 'comercial'
- detalles: jsonb (required) - full form data
- estado: text (default: 'nuevo') - 'nuevo', 'cotizado', 'completado'
- fecha: timestamp with time zone (default: now())

## Table: cotizaciones
- id: uuid (primary key, default: gen_random_uuid())
- cliente_id: uuid (foreign key to clientes.id)
- solicitud_id: uuid (foreign key to solicitudes.id)
- descripcion: text
- precio: numeric
- fecha: timestamp with time zone (default: now())
