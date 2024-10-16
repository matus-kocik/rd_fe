import { useState, useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './UserList.css';
import { User } from "./interfaceUser";


export const UserList = () => {

    const [user, setUser] = useState<User[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText} - Failed to fetch users`);
                }
                const data: User[] = await response.json();
                setUser(data);
            } catch (error) {
                setError((error as Error).message || "An unexpected error occurred. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <>
            <h1>
                Users
            </h1>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && user?.length === 0 && <div>No users available.</div>}
            <div className="user-list">
                {user?.map((user) => (
                    <Card sx={{ maxWidth: 300, margin: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://robohash.org/${user.id}?set=set2`}
                                alt={user.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {user.company.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small" color="primary">
                                {user.email}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
};