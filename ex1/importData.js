const admin = require("firebase-admin");
const serviceAccount = require("./dbstructure-d73dc-firebase-adminsdk-fbsvc-88eb38654a.json");

// Initialisation Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Fonction pour injecter la structure
async function importData() {
  try {
    // ----------------------
    // 1. Utilisateur normal
    // ----------------------
    const userRef = db.collection("userInfos").doc("userId_123");
    await userRef.set({
      name: "test test",
      email: "test@email.com"
    });

    await userRef.collection("diagnostics").doc("diagnosticId_001").set({
      diagnosticPhotoUrl: "https://storage.googleapis.com/bucket/diag1.jpg",
      scores: {
        hydration: 85,
        elasticity: 60,
        pigmentation: 40,
        oiliness: 50,
        sensitivity: 30
      },
      timestamp: "2025-08-11T14:25:00Z",
      recommendedProduct: {
        barcode: "1234567890123",
        productName: "Hydrating Cream"
      }
    });

    await userRef.collection("diagnostics").doc("diagnosticId_002").set({
      diagnosticPhotoUrl: "https://storage.googleapis.com/bucket/diag2.jpg",
      scores: {
        hydration: 75,
        elasticity: 55,
        pigmentation: 35,
        oiliness: 45,
        sensitivity: 25
      },
      timestamp: "2025-08-12T09:10:00Z",
      recommendedProduct: {
        barcode: "9876543210987",
        productName: "Serum"
      }
    });

    // ----------------------
    // 2. Compte professionnel
    // ----------------------
    const proRef = db.collection("proDiagnostics").doc("proUserId_456");
    await proRef.set({
      name: "Dr. Alice"
    });

    const clientRef = proRef.collection("clients").doc("clientId_001");
    await clientRef.set({
      firstName: "test2",
      lastName: "test22",
      phone: "+212600000000"
    });

    await clientRef.collection("diagnostics").doc("diagnosticId_010").set({
      diagnosticPhotoUrl: "https://storage.googleapis.com/bucket/client1_diag1.jpg",
      scores: {
        hydration: 65,
        elasticity: 70,
        pigmentation: 45,
        oiliness: 55,
        sensitivity: 40
      },
      timestamp: "2025-08-11T10:00:00Z",
      recommendedProduct: {
        barcode: "1122334455667",
        productName: "SPF"
      }
    });

    console.log("Données importées avec succès dans Firestore !");
  } catch (error) {
    console.error("Erreur d'import:", error);
  }
}

importData();
