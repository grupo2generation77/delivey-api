import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_delivery',
            entities: [Produto,Categoria, Usuario],
            synchronize: true,
    };
  }
}