import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class Querys {
	// @ApiModelProperty({ default: '1', required: false })
	@Type(() => Number)
	@IsNumber()
	pagina: number = 1;

	// @ApiModelProperty({ required: false })
	@IsOptional()
	@IsString()
	buscar: string;
}
