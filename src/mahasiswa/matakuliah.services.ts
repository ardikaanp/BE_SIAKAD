/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Matakuliah } from './entities/matakuliah.entity';
import { CreateMatakuliahDto } from './dto/create-matakuliah.dto';
import { UpdateMatakuliahDto } from './dto/update-matakuliah.dto';
@Injectable()
export class MatakuliahService {
private data: Matakuliah[] = [];
create(dto: CreateMatakuliahDto): Matakuliah {
const newMt = new Matakuliah(
dto.kode,
dto.nama,
dto.sks,
dto.semester,
dto.jurusan,
);
this.data.push(newMt);
return newMt;
}
findAll(): Matakuliah[] {
return this.data;
}
findOne(kode: string): Matakuliah | undefined {
return this.data.find((m) => m.kode === kode);
}
update(kode: string, dto: UpdateMatakuliahDto): Matakuliah | null {
if (!dto.kode || !dto.nama || !dto.sks || !dto.semester || !dto.jurusan) {
throw new Error('Semua field wajib diisi untuk update');
}
const index = this.data.findIndex((m) => m.kode === kode);
if (index === -1) return null;
const updated = new Matakuliah(
dto.kode,
dto.nama,
dto.sks,
dto.semester,
dto.jurusan,
);
this.data[index] = updated;
return updated;
}
remove(kode: string): Matakuliah | null {
const index = this.data.findIndex((m) => m.kode === kode);
if (index === -1) return null;
const deleted = this.data[index];
this.data.splice(index, 1);
return deleted;
}
}