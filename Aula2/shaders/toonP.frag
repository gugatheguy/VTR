#version 330

uniform	vec4 diffuse;

in Data{
	vec3 normal;
	vec3 l_dir;
} DataIn;

out vec4 outputF;

void main()
{
	float intensity;
	intensity = max(0,dot(DataIn.normal,DataIn.l_dir));
	outputF = (intensity + 0.25) * diffuse;
}
