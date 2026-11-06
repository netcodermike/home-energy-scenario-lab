# Using Home Energy Scenario Lab

## Quick start

Start the application using the README commands. Adjust the labelled controls, run the primary action, and inspect the result in the workspace. Local exports are downloaded only when you select an export action.

## Supported workflow

1. Appliance watts/hours/count calculations.
2. Baseline and reduced-use comparison.
3. Tariff and scenario JSON report.

## Validation and troubleshooting

Run the commands in the README. Invalid inputs produce explicit errors rather than silently changing the requested operation. Browser audio requires a user gesture; microphone apps require HTTPS or localhost and permission. For file tools, supply supported input formats and writable output directories.

## Limitations

Simple constant-power scenario model, not measured household usage or a billing prediction. No utility credentials are requested.

Tests use synthetic fixtures. These tests do not certify hardware compatibility, real-world forecast quality, trained-model accuracy, or production suitability for every input.
