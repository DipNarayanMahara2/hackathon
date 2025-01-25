// /pages/user-dashboard.tsx (extending)
import { useEffect, useState } from "react";
import { db } from "../../../firbase configuration/firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const WasteList: React.FC = () => {
  const [wasteItems, setWasteItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchWasteItems = async () => {
      try {
        const q = query(
          collection(db, "wasteMaterials"),
          where("userId", "==", "currentUserId")
        );
        const querySnapshot = await getDocs(q);
        const items: any[] = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setWasteItems(items);
      } catch (err) {
        console.error("Error fetching waste materials:", err);
      }
    };

    fetchWasteItems();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Your Waste Listings</h2>
      <div className="mt-4">
        {wasteItems.length > 0 ? (
          <ul>
            {wasteItems.map((item, index) => (
              <li key={index} className="border p-4 rounded-lg mb-4">
                <p>Waste Type: {item.wasteType}</p>
                <p>Quantity: {item.quantity} kg</p>
                <p>Condition: {item.condition || "Not specified"}</p>
                <p>Listed on: {item.timestamp.toDate().toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No waste materials listed yet.</p>
        )}
      </div>
    </div>
  );
};

export default WasteList;
