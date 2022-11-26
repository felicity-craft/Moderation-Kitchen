namespace ModerationKitchen.Web.Api.Models;

public record Recipe(
    string Slug,
    bool IsDraft,
    string Title,
    string Author,
    DateTime Date,
    string Intro,
    string HeroImage,
    string Body,
    RecipeRating Rating,
    string PrepTime,
    string CookTime,
    string QuantitySizeMade,
    IReadOnlyList<string> Ingredients,
    IReadOnlyList<string> Method,
    IReadOnlyList<string> Tags,
    IReadOnlyList<RecipeComment> Comments
);