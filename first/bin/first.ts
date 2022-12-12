#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { FirstStack } from "../lib/first-stack";

const app = new cdk.App();
new FirstStack(app, "FirstStack", { description: "First CDK Stack" });
