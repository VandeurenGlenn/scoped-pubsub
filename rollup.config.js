import typescript from "@rollup/plugin-typescript";

export default [{
  input: ['./src/scoped-pubsub.ts'],

  output: [{
    format: 'es',
    dir: './exports'
  }],
  
  plugins: [
    typescript()
  ]
}]