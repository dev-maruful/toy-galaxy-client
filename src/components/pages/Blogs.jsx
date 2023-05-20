import React from "react";
import workHard from "../../assets/87979-work-hard.json";
import Lottie from "lottie-react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="mt-10 mb-28 flex items-center gap-5">
      <div className="w-1/2">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content font-medium">
            <p>
              An access token and a refresh token are commonly used in
              authentication and authorization systems. Here's a brief
              explanation of what they are, how they work, and where they should
              be stored on the client-side: <br /> <br />
              <strong className="underline">1. Access Token:</strong> An access
              token is a credential that is issued by an authentication server
              upon successful authentication. It is a security token that
              contains information about the user or client and grants access to
              specific resources or services on behalf of the authenticated
              user. Access tokens are usually short-lived and have an expiration
              time. <br />
              When a user requests access to a protected resource, they present
              their access token. The server verifies the token's validity,
              permissions, and expiration before granting or denying access to
              the requested resource. Access tokens are typically included in
              the authorization header of API requests or sent as query
              parameters. <br />
              <br />
              <strong className="underline">2. Refresh Token:</strong> A refresh
              token is a long-lived credential that is also issued during the
              authentication process. Unlike access tokens, refresh tokens are
              not meant to grant direct access to resources. Instead, they are
              used to obtain new access tokens when the current one expires.
              Refresh tokens have a longer lifespan and are securely stored on
              the client-side. <br />
              When an access token expires, the client sends the refresh token
              to the authorization server to obtain a new access token. The
              server verifies the refresh token's validity and issues a fresh
              access token, which allows the client to continue accessing
              protected resources without requiring the user to re-authenticate.{" "}
              <br />
              <br />
              <strong className="underline">
                3. Storage on the Client-side:
              </strong>{" "}
              Access tokens should be stored securely on the client-side to
              prevent unauthorized access. The recommended approach is to store
              access tokens in browser memory (such as using JavaScript
              variables) or in an in-memory storage mechanism like
              sessionStorage. These storage methods ensure that the access
              tokens are not persisted across browser sessions or tabs. <br />
              In contrast, refresh tokens should be securely stored on the
              client-side for long-term use. The most secure approach is to
              store refresh tokens in an HTTP-only cookie, which provides
              protection against cross-site scripting (XSS) attacks. Cookies
              with the "httpOnly" flag cannot be accessed by client-side
              JavaScript, making them less vulnerable to unauthorized access.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content font-medium">
            <p>
              SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
              are two types of database management systems that differ in their
              data models, query languages, scalability, and use cases. Here's a
              comparison between SQL and NoSQL databases: <br />
              <br />
              <strong className="underline">1. Data Model:</strong> SQL
              databases follow a structured, tabular data model, where data is
              organized into tables with predefined schemas and relationships
              between tables (relational model). NoSQL databases, on the other
              hand, employ various data models, such as key-value pairs,
              documents, columnar, or graph structures. This allows for flexible
              and schema-less data representation. <br />
              <strong className="underline">2. Query Language:</strong> SQL
              databases use SQL as a standardized query language for defining
              and manipulating data. SQL provides powerful capabilities for
              complex queries, joins, and data manipulation operations. NoSQL
              databases use different query languages specific to their data
              model, such as JavaScript for MongoDB (document database) or CQL
              for Cassandra (wide column store). These languages may have
              different syntax and capabilities compared to SQL. <br />
              <strong className="underline">3. Scalability:</strong> SQL
              databases are typically vertically scalable, meaning they handle
              increased loads by upgrading the hardware (e.g., adding more
              memory or processing power). NoSQL databases are designed for
              horizontal scalability, allowing them to distribute data across
              multiple servers or clusters. This makes NoSQL databases better
              suited for handling massive amounts of data and high write/read
              workloads. <br />
              <strong className="underline">
                4. Flexibility and Schema:
              </strong>{" "}
              SQL databases enforce rigid schemas, where the structure and
              relationships of data must be defined in advance. Adding or
              modifying columns or tables may require altering the schema and
              potentially disrupting existing data. NoSQL databases offer more
              flexibility as they are schema-less or have flexible schemas. They
              allow for dynamic and evolving data structures without requiring
              predefined schemas. <br />
              <strong className="underline">5. ACID Compliance:</strong> SQL
              databases adhere to the ACID (Atomicity, Consistency, Isolation,
              Durability) properties, ensuring data integrity and transactional
              consistency. ACID compliance guarantees that database operations
              are reliable and maintain data consistency. NoSQL databases,
              however, often prioritize scalability and performance over strict
              ACID compliance. They may offer relaxed consistency models (e.g.,
              eventual consistency) to achieve high availability and partition
              tolerance. <br />
              <strong className="underline">6. Use Cases:</strong> SQL databases
              are commonly used for applications that require complex querying,
              structured data, and transactions, such as financial systems,
              e-commerce platforms, or content management systems. NoSQL
              databases excel in handling large amounts of unstructured or
              semi-structured data, real-time analytics, event logging, and
              scenarios with high scalability demands, such as social networks,
              IoT applications, or recommendation engines.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content font-medium">
            <p>
              Express.js and Nest.js are both web application frameworks that
              are built on top of Node.js. While they share some similarities,
              they have distinct features and design philosophies. <br />
              <br />
              <strong className="underline">1. Express.js:</strong> Express.js
              is a minimalist, unopinionated web framework for Node.js. It
              provides a simple and flexible set of features for building web
              applications and APIs. Express.js focuses on providing a thin
              layer of fundamental web functionality, allowing developers to
              have more control and freedom in designing their applications. It
              offers routing, middleware support, and basic HTTP
              request/response handling. Express.js is known for its simplicity,
              lightweight nature, and large ecosystem of middleware and plugins,
              making it highly customizable and suitable for a wide range of
              applications. <br />
              <strong className="underline">2. Nest.js:</strong> Nest.js is a
              full-featured, opinionated web framework for building scalable and
              maintainable applications in Node.js. It combines elements of
              object-oriented programming (OOP), functional programming (FP),
              and the modular architecture inspired by Angular. Nest.js aims to
              provide a structured and organized approach to building
              server-side applications, with a focus on extensibility,
              testability, and developer productivity. It offers a powerful
              dependency injection system, a module-based architecture,
              integrated support for TypeScript, decorators for building
              controllers and providers, and built-in support for features like
              routing, validation, and authentication.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content font-medium">
            <p>
              In MongoDB, the <strong>aggregate</strong> method is used to
              perform advanced data aggregation operations on a collection. It
              allows us to process and analyze data using various stages, such
              as filtering, grouping, sorting, transforming, and computing
              aggregations. <br />
              <br />
              The <strong>aggregate</strong> method takes an array of stages as
              its argument. Each stage represents a specific operation that is
              applied to the data in sequence. The output of one stage becomes
              the input for the next stage, forming a pipeline of data
              transformation.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Lottie animationData={workHard} loop={true} />
      </div>
    </div>
  );
};

export default Blogs;
