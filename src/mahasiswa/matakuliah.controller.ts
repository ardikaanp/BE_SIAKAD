/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
  } from '@nestjs/common';
  import { MatakuliahService } from './matakuliah.services';
  import { CreateMatakuliahDto } from './dto/create-matakuliah.dto';
  import { UpdateMatakuliahDto } from './dto/update-matakuliah.dto';
  @Controller('matakuliah')
  export class MatakuliahController {
  constructor(private readonly service: MatakuliahService) {}
  @Get()
  findAll() {
  return this.service.findAll();
  }
  @Get(':kode')
  findOne(@Param('kode') kode: string) {
  const mt = this.service.findOne(kode);
  if (!mt) {
  throw new NotFoundException(
  `Matakuliah dengan Kode ${kode} tidak ditemukan`,
  );
  }
  return mt;
  }
  @Post()
  create(@Body() dto: CreateMatakuliahDto) {
  return this.service.create(dto);
  }
  @Put(':kode')
  update(@Param('kode') kode: string, @Body() dto: UpdateMatakuliahDto) {
  try {
  const updated = this.service.update(kode, dto);
  if (!updated) {
  throw new NotFoundException(
  `Matakuliah dengan kode ${kode} tidak ditemukan`,
  );
  }
  return updated;
  } catch (error) {
  if (error instanceof Error) {
  throw new BadRequestException(error.message);
  }
  throw new BadRequestException('Terjadi kesalahan tak dikenal');
  }
  }
  @Delete(':kode')
  remove(@Param('kode') kode: string) {
  const deleted = this.service.remove(kode);
  if (!deleted) {
  throw new NotFoundException(
  `Matakuliah dengan kode ${kode} tidak ditemukan`,
  );
  }
  return deleted;
  }
  }