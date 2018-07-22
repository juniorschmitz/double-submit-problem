 <?php
$servername = "localhost";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE todo";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$result = "CREATE TABLE tarefas(descricao VARCHAR(100));";
if(!$result = $db->query($sql)){
    die('There was an error running the query [' . $db->error . ']');
}

$conn->close();
?> 