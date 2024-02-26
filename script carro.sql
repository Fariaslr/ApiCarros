create database dbApiCarros;

use dbApiCarros;

create table fabricantes(
	fabricantes_codigo int primary key auto_increment,
    fabricantes_nome_fabricante varchar(50)
);

insert into fabricantes
value(default,"Toyota"),(default,"Volkswagen"),(default,"Mercedes-Benz"),(default,"Ford"),(default,"BMW");

create table carros(
	carros_codigo int primary key auto_increment,
    carros_modelo varchar(30),
    carros_codigo_marca int 
);

alter table carros
add constraint fkFabricantesCodigoMarca foreign key (carros_codigo_marca) references fabricantes(fabricantes_codigo);

insert into carros
value(default,"Corolla",1),(default,"Gol",2),(default,"CLA 200",3),(default,"Ranger",4),(default,"X6",5);