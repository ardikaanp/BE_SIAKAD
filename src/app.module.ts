import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { MatakuliahModule } from './mahasiswa/matakuliah.module';


@Module({
  imports: [MahasiswaModule, MatakuliahModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
