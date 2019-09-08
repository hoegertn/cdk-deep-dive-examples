#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCommunityDayStack } from '../lib/aws-community-day-stack';
import { MigrationStack } from '../lib/migration-stack';
import { ExistingStack } from '../lib/existing-stack';
import { AspectsStack } from '../lib/aspects-stack';
import { CustomResourceStack } from '../lib/custom-resource-stack';
import { ContextStack } from '../lib/context';
import { LambdaStack } from '../lib/lambda';
import { S3DeployStack } from '../lib/s3deploy';

const pgarbe = { account: '424144556073', region: 'eu-west-1' };
const hoegertn = { account: '659154734889', region: 'eu-central-1' };
const current = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

const app = new cdk.App();

new AwsCommunityDayStack(app, 'AwsCommunityDayStack');
new MigrationStack(app, 'MigrationStack');
new AspectsStack(app, 'AspectsStack', { env: current });
new CustomResourceStack(app, 'CustomResourceStack');
new ExistingStack(app, 'ExistingStack', { env: current });

new ContextStack(app, 'ContextStack', { env: current });

new LambdaStack(app, 'LambdaStack', { env: current });
new S3DeployStack(app, 'S3DeployStack', { env: current });
