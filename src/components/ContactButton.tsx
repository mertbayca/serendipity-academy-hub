import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  inverted?: boolean; // When navbar is transparent on hero
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

const ContactButton: React.FC<Props> = ({ inverted = false, className, size = 'default' }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = 'office@innovators-serendipity.com';
    const subject = encodeURIComponent(`Website Inquiry from ${name || 'Innovators Serendipity Academy'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setOpen(false);
  };

  const btnClass = inverted
    ? 'border-white text-white hover:bg-white hover:text-gray-900'
    : '';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={inverted ? 'outline' : 'outline'}
          size={size}
          className={className ? `${btnClass} ${className}` : btnClass}
        >
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            We typically respond within one business day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" placeholder="How can we help?" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue hover:bg-blue-dark text-white">Send</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;

