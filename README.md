![Altitude MVC for JS++](logo.png)

# Altitude

Altitude is an MVC/MVP framework for the [JS++ programming language](https://www.onux.com/jspp/).

## Altitude Frontend

Altitude Frontend Core consists of fewer than 100 lines SLOC but has scaled for complex applications with thousands of
lines of code in internal Onux applications. Furthermore, Altitude Frontend Core includes compile-time only concepts,
such as abstract classes, that may not be generated at all in the final code.

Altitude Frontend offers:

* **Lightweight**. At fewer than 100 source lines of core code (excluding whitespace and comments) - including
compile-time concepts that don't end up in the final code - Altitude Frontend allows you to write complex, scalable
applications that load fast even when mobile reception is weak (e.g. getting downgraded to 2G/3G connections).
* **Pure MVC**. The controller modifies the model which updates the view (via an observer relationship). This pattern
has historically proven to scale.
* **Flexibility**. Altitude Frontend allows you to use either the MVC or MVP architecture - depending on your needs.
* **Testing**. Altitude Frontend is architected to make your code testable.

## Altitude Backend

Altitude Backend is a JS++ MVC framework for Node.js that allows you to do what you can't do in JavaScript: write
well-architected, safe code to reduce downtime, reduce security vulnerabilities, and reduce HTTP 500 internal server
errors. Altitude leverages JS++ features to allow you to use any library in the Node.js ecosystem without having to
adapt your domain model to deal with lack of type safety, lack of method overloading, lack of virtual methods, awkward
retrofitted design patterns, and so on.

Rapidly develop, test, and deploy scalable applications with pre-built libraries to handle:

* **User authentication** across a variety of services such as Facebook, Google, or your own custom service.
* Type-safe data access layers for **MySQL and other popular databases**
* Easy domain modeling with JS++ type guarantees, classes, virtual methods, method overloading, and more.
* Re-use established, industrial-strength design patterns and best practices from Java and C# directly.

Altitude Backend provides the following components:

* Model/View/Controller
* Router
* Model Validation
* Repository Pattern (see Martin Fowler's "Patterns of Enterprise Application Architecture")
* Database connectors for MySQL

## Links

* [Documentation](https://docs.onux.com/en-US/Developers/JavaScript-PP/Altitude-MVC)

## License

MIT License