using System.IO.Abstractions;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using ModerationKitchen.Web.Api.Models;

namespace ModerationKitchen.Web.Api.Controllers;

[ApiController]
[Route("api/recipes")]
public class RecipesController: ControllerBase
{
    private readonly string dataDirectoryPath = "/Users/fliss/Desktop/VS Projects/ModerationKitchen/WebApi/Web.Api/Data";
    private readonly IFileSystem fileSystem;
    private readonly JsonSerializerOptions jsonOptions;
    private readonly ILogger<RecipesController> logger;

    public RecipesController(IFileSystem fileSystem, JsonSerializerOptions jsonOptions, ILogger<RecipesController> logger)
    {
        this.fileSystem = fileSystem;
        this.jsonOptions = jsonOptions;
        this.logger = logger;
    }

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetBySlug([FromRoute] string slug, CancellationToken ct){
        this.logger.LogInformation("Trying to get recipe with slug {slug}", slug);
        string recipeFilePath = Path.Join(this.dataDirectoryPath, $"{slug}.json");
        if (this.fileSystem.File.Exists(recipeFilePath))
        {
            // get a stream which represents the file located at recipeFilePath.
            // this can be then be used by other interested parties (in this case the JsonSerializer) to read the file.
            using Stream stream = this.fileSystem.File.OpenRead(recipeFilePath);
            // turning the stream/file from text into a c# object that we can use.
            var recipe = await JsonSerializer.DeserializeAsync<Recipe>(stream, this.jsonOptions, ct);
            return this.Ok(recipe);
        }
        this.logger.LogWarning("No recipe found with slug {slug}", slug);
        return this.NotFound();
    }

    [HttpGet]
    public async Task<IActionResult> GetAllRecipes(CancellationToken ct){
        if (this.fileSystem.Directory.Exists(this.dataDirectoryPath))
        {
            // Loops through each json file in our dataDirectory and converts the contents of each file into a Recipe object.
            // Each Recipe object is added to a single list called recipes which gets returned.
            string[] jsonFilePaths = this.fileSystem.Directory.GetFiles(this.dataDirectoryPath, "*.json");
            var recipes = new List<Recipe>();
            foreach (var filePath in jsonFilePaths)
            {
                using Stream stream = this.fileSystem.File.OpenRead(filePath);
                var recipe = await JsonSerializer.DeserializeAsync<Recipe>(stream, this.jsonOptions, ct);
                recipes.Add(recipe!);
            }
            return this.Ok(recipes);
        }
        return this.Ok(Array.Empty<Recipe>());
    }

}