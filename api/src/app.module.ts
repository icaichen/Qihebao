import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { RisksModule } from './risks/risks.module';
import { ReportsModule } from './reports/reports.module';
import { CasesModule } from './cases/cases.module';

@Module({
  imports: [CompaniesModule, RisksModule, ReportsModule, CasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
