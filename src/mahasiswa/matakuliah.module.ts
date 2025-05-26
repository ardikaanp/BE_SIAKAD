/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MatakuliahService } from './matakuliah.services';
import { MatakuliahController } from './matakuliah.controller';

@Module({
  controllers: [MatakuliahController],  providers: [MatakuliahService],
})
export class MatakuliahModule {}
