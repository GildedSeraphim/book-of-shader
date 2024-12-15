#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
  gl_FragColor = vec4(abs(sin(u_time)),abs(cos(u_time)), abs(tan(u_time)), 1.0);
}
