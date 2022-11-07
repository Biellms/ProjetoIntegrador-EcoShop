package br.org.generation.treco.configuration;

import java.util.*;

import org.springframework.context.annotation.*;
import org.springframework.http.HttpMethod;

import springfox.documentation.builders.*;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("br.org.generation.treco.controller"))
				.paths(PathSelectors.any()).build().apiInfo(metadata()).useDefaultResponseMessages(false)
				.globalResponses(HttpMethod.GET, responseMessage()).globalResponses(HttpMethod.POST, responseMessage())
				.globalResponses(HttpMethod.PUT, responseMessage())
				.globalResponses(HttpMethod.DELETE, responseMessage());
	}

	public static ApiInfo metadata() {
		
		return new ApiInfoBuilder().title("API - TrECO").description("Projeto API Spring - TrECO")
				.version("1.0.0").license("Apache License Version 2.0").licenseUrl("https://github.com/Biellms")
				.contact(contact()).build();
	}

	private static Contact contact() {
		
		return new Contact("Gabriel Mendes", "https://github.com/Biellms", "biell.mendes8@gmail.com");
	}

	private static List<Response> responseMessage() {
		
		return new ArrayList<Response>() {
			private static final long serialVersionUID = 1L; {
				add(new ResponseBuilder().code("200").description("Sucesso!").build());
				add(new ResponseBuilder().code("201").description("Criado!").build());
				add(new ResponseBuilder().code("400").description("Erro na requisição!").build());
				add(new ResponseBuilder().code("401").description("Não Autorizado!").build());
				add(new ResponseBuilder().code("403").description("Proibido!").build());
				add(new ResponseBuilder().code("404").description("Não Encontrado!").build());
				add(new ResponseBuilder().code("500").description("Erro!").build());
			}
		};
	}
}
