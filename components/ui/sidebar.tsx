"use client"

import * as React from "react"
import { ChevronDown, Menu } from "lucide-react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const SidebarContext = React.createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: true,
  setIsOpen: () => {},
})

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="grid lg:grid-cols-[auto_1fr]">{children}</div>
    </SidebarContext.Provider>
  )
}

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(SidebarContext)

  return (
    <div
      className={cn("hidden border-r bg-background lg:block", isOpen ? "lg:w-[280px]" : "lg:w-[80px]", className)}
      {...props}
    />
  )
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(SidebarContext)

  return (
    <div
      className={cn("flex h-14 items-center border-b px-4", isOpen ? "justify-between" : "justify-center", className)}
      {...props}
    />
  )
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("h-[calc(100vh-3.5rem)] overflow-y-auto py-2", className)} {...props} />
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pb-4", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-1 px-2", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid", className)} {...props} />
}

const sidebarMenuButtonVariants = cva(
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted/50 [&[data-active]]:bg-muted/50",
  {
    variants: {
      size: {
        default: "h-9",
        sm: "h-8",
        lg: "h-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg"
  asChild?: boolean
  isActive?: boolean
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, size, asChild = false, isActive, ...props }, ref) => {
    const { isOpen } = React.useContext(SidebarContext)
    const Comp = asChild ? React.Fragment : "button"
    const childProps = asChild ? { className: cn(sidebarMenuButtonVariants({ size, className })) } : {}

    if (!isOpen) {
      return (
        <Comp {...childProps}>
          <button
            ref={ref}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md p-0 hover:bg-muted/50 [&[data-active]]:bg-muted/50",
              className,
            )}
            data-active={isActive ? "" : undefined}
            {...props}
          />
        </Comp>
      )
    }

    return (
      <Comp {...childProps}>
        <button
          ref={ref}
          className={cn(sidebarMenuButtonVariants({ size, className }))}
          data-active={isActive ? "" : undefined}
          {...props}
        />
      </Comp>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

export function SidebarMenuSub({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(SidebarContext)

  if (!isOpen) {
    return null
  }

  return <div className={cn("grid gap-1 pl-6", className)} {...props} />
}

export function SidebarMenuSubItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid", className)} {...props} />
}

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
}

export const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, asChild = false, isActive, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const childProps = asChild
      ? {
          className: cn(
            "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted/50 [&[data-active]]:bg-muted/50",
            className,
          ),
        }
      : {}

    return (
      <Comp {...childProps}>
        <button
          ref={ref}
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted/50 [&[data-active]]:bg-muted/50",
            className,
          )}
          data-active={isActive ? "" : undefined}
          {...props}
        />
      </Comp>
    )
  },
)
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export function SidebarRail({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, setIsOpen } = React.useContext(SidebarContext)

  return (
    <div
      className={cn(
        "hidden h-full w-[1px] cursor-col-resize bg-border opacity-0 transition-opacity hover:opacity-100 lg:block",
        className,
      )}
      onDoubleClick={() => setIsOpen(!isOpen)}
      {...props}
    />
  )
}

export function SidebarInset({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col", className)} {...props} />
}

export function SidebarTrigger() {
  const { isOpen, setIsOpen } = React.useContext(SidebarContext)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="hidden lg:flex"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild>
                    <a href="/">
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <ChevronDown className="size-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">Dr. Jane Mathematician</span>
                        <span className="">University of Mathematics</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/" className="font-medium">
                      Home
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/cv" className="font-medium">
                      Curriculum Vitae
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/research" className="font-medium">
                      Research
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/teaching" className="font-medium">
                      Teaching
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </SheetContent>
      </Sheet>
    </>
  )
}

