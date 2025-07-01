import { useEffect, useState } from "react";

import { supabase } from "@/utils/supabaseClient";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const fetchData = async () => {
        const { data, error } = await supabase.from("Products").select("*");
        if (error) console.error(error);
        else setProducts(data);
      };
      fetchData();
    }, []);

    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                width: "250px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={product.Image_url}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h2 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
                {product.name}
              </h2>
              <p style={{ color: "#555" }}>{product.description}</p>
              <p style={{ fontWeight: "bold" }}>${product.price}</p>
              <small style={{ color: "#888" }}>
                Created: {new Date(product.create_at).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      </div>
     );
}
