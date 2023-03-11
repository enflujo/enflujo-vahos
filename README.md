# Visuales para Ana María Vahos

![Estilo Código](https://github.com/enflujo/enflujo-plantilla-vite/actions/workflows/estilo-codigo.yml/badge.svg)
![Tamaño](https://img.shields.io/github/repo-size/enflujo/enflujo-plantilla-vite?color=%235757f7&label=Tama%C3%B1o%20repo&logo=open-access&logoColor=white)
![Licencia](https://img.shields.io/github/license/enflujo/enflujo-plantilla-vite?label=Licencia&logo=open-source-initiative&logoColor=white)

## WebGL

### Tipos de variables de GLSL

#### Floats

```glsl

float gl.uniform1f(p, a);
vec2 gl.uniform2f(p, a, b);
vec3 gl.uniform3f(p, a, b, c);
vec4 gl.uniform4f(p, a, b, c, d);
```

#### Integers

```glsl
int gl.uniform1i(p, a);
ivec2 gl.uniform2i(p, a, b);
ivec3 gl.uniform3i(p, a, b, c);
ivec4 gl.uniform4i(p, a, b, c, d);

sampler gl.uniform1i(p, s);
```

#### Unsigned ints

```glsl
uint gl.uniform1u(p, a);
uvec2 gl.uniform2u(p, a, b);
uvec3 gl.uniform3u(p, a, b, c);
uvec4 gl.uniform4u(p, a, b, c, d);
```

#### Matrices

```glsl
mat2 gl.uniformMatrix2fv(p, [v1, v2, v3, v4]); // Matriz de 4 valores
mat3 gl.uniformMatrix3fv(p, [...]); // Matriz de 9 valores
mat4 gl.uniformMatrix4fv(p, [...]); // Matriz de 16 valores
```
