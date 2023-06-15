
using System;
namespace Microsoft.Extensions.DependencyInjection
{
	public static class ConfigureServices
	{
		public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
		{
            var allowedOrigins = new List<string>();
            var allowOrigins = configuration["AllowedOrigins"].Split(",");

            services.AddCors(options =>
            {
                options.AddPolicy(name: "CorsPolicy",
                          builder => builder.WithOrigins(allowOrigins)
                          .AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials());
            });

            return services;
        }
	}
}

