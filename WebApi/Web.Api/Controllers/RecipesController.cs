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

    public RecipesController(IFileSystem fileSystem, JsonSerializerOptions jsonOptions)
    {
        this.fileSystem = fileSystem;
        this.jsonOptions = jsonOptions;
    }

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetBySlug([FromRoute] string slug, CancellationToken ct){
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
        return this.NotFound();
    }

}