import { Module } from '@nestjs/common';

import { AccountModule } from './account/account.module';
import { DevelopersModule } from './developers/developers.module';
import { FilesModule } from './files/files.module';
import { MoviesModule } from './movies/movies.module';

@Module({
    imports: [MoviesModule, AccountModule, FilesModule, DevelopersModule]
})
export class AppModule {}
