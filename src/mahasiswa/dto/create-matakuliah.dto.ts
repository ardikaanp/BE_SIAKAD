/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString, } from 'class-validator';
export class CreateMatakuliahDto {
@IsString({ message: 'Kode harus berupa teks' })
kode: string;
@IsString({ message: 'Nama tidak boleh kosong' })
nama: string;
@IsNumber({}, { message: 'SKS harus berupa angka' })
sks: number;
@IsString({ message: 'Semester harus berupa teks' })
semester: string;
@IsString({ message: 'Jurusan email tidak valid' })
jurusan: string;
}