const tracer = require('dd-trace').init({
    profiling: true,
    service: 'e2e-quotes',
    env: 'prod',
    version: '1.0.0',
    logInjection: true,
    runtimeMetrics: true
}); // initialized in a different file to avoid hoisting.

module.exports = tracer;
