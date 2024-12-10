import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({ onTabChange }) => {
  return (
    <div className="relative flex items-center justify-center p-4 bg-transparent text-white">
        <div className="flex justify-between">
            <Tabs defaultValue="todo" onValueChange={onTabChange}>
                <TabsList>
                    <TabsTrigger value="todo">ToDo</TabsTrigger>
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='absolute top-3 right-4'>
            <AvatarImage as={FontAwesomeIcon} icon={faUser} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='pr-2 ml-auto'>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;