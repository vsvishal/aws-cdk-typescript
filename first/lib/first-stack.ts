import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Bucket } from "aws-cdk-lib/aws-s3";
import { CfnOutput, CfnParameter, Duration } from "aws-cdk-lib";

export class FirstStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const duration = new CfnParameter(this, "duration", {
      type: "Number",
      default: 6,
      minValue: 1,
      maxValue: 10,
    });

    const myBucket = new Bucket(this, "vishal-aws-cdk-demo", {
      bucketName: "vishal-aws-cdk-demo",
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber),
        },
      ],
    });

    new CfnOutput(this, "mybucket", {
      value: myBucket.bucketName,
      description: "first bucket using cdk",
      exportName: "vishal-demo-bucket",
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'FirstQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
