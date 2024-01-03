'use client'
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Router from 'next/router'

const LoginForm = () => {
  const handleJoinNowClick = () => {

    Router.push('/hello-nextjs')
  };

  return (
    <Card className="w-[400px]">
      <CardHeader className='text-center'>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome Back !</CardDescription>
      </CardHeader>
      <CardContent>
        <form method='post'>
          <div className="flex flex-col space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div>
              <Label onClick={handleJoinNowClick} htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
              />
            </div>
          </div>
          <Button  onClick={handleJoinNowClick}  className="mt-4 w-full">
          Join Now
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Do not have an account? <a href="/signup">Sign Up</a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
