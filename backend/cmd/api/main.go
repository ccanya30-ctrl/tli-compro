package main

import (
	"log"

	"github.com/joho/godotenv"

	"tli-backend/internal/config"
	"tli-backend/internal/database"
	"tli-backend/internal/router"

	_ "tli-backend/docs"
)

// @title TLI Backend API
// @version 1.0
// @description REST API Backend untuk Trifilosofi Lifestyle Indonesia
// @host localhost:8080
// @BasePath /api/v1
func main() {

	// Load environment variable
	if err := godotenv.Load(); err != nil {
		log.Println(".env file not found, using environment variables")
	}

	// Load configuration
	cfg := config.Load()

	// Connect to PostgreSQL
	db, err := database.Connect(cfg)
	if err != nil {
		log.Fatal("Failed to connect database:", err)
	}

	// Setup router
	r := router.Setup(db)

	// Run server
	log.Println("TLI Backend running on http://localhost:8080")

	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
