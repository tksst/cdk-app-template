import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FooStack extends Stack {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'FooQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
    }
}
