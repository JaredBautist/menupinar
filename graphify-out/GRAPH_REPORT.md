# Graph Report - MENUPINAR  (2026-09-19)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 615 nodes · 1128 edges · 40 communities (30 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9365fcad`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- hooks/use-toast.ts
- utils.ts
- sidebar.tsx
- react
- class-variance-authority
- cn
- page.tsx
- command.tsx
- package.json
- compilerOptions
- components.json
- menubar.tsx
- context-menu.tsx
- dropdown-menu.tsx
- form.tsx
- carousel.tsx
- field.tsx
- item.tsx
- chart.tsx
- drawer.tsx
- sheet.tsx
- input-group.tsx
- navigation-menu.tsx
- devDependencies
- empty.tsx
- layout.tsx
- theme-provider.tsx
- popover.tsx
- tabs.tsx
- collapsible.tsx
- hover-card.tsx
- scripts
- scroll-area.tsx
- aspect-ratio.tsx
- progress.tsx
- slider.tsx
- next.config.mjs
- postcss.config.mjs
- next-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 277 edges
2. `react` - 52 edges
3. `lucide-react` - 22 edges
4. `compilerOptions` - 16 edges
5. `class-variance-authority` - 14 edges
6. `buttonVariants` - 9 edges
7. `Button()` - 8 edges
8. `@radix-ui/react-slot` - 8 edges
9. `Separator()` - 6 edges
10. `aliases` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Menubar()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts
- `MenubarLabel()` --calls--> `cn()`  [EXTRACTED]
  components/ui/menubar.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (40 total, 10 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.04
Nodes (51): dependencies, autoprefixer, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, framer-motion (+43 more)

### Community 1 - "hooks/use-toast.ts"
Cohesion: 0.07
Nodes (39): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+31 more)

### Community 2 - "utils.ts"
Cohesion: 0.05
Nodes (28): AccordionContent(), AccordionItem(), AccordionTrigger(), Checkbox(), InputOTP(), InputOTPGroup(), InputOTPSlot(), RadioGroup() (+20 more)

### Community 3 - "sidebar.tsx"
Cohesion: 0.07
Nodes (35): Input(), Sidebar(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+27 more)

### Community 4 - "react"
Cohesion: 0.08
Nodes (23): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay(), AlertDialogTitle() (+15 more)

### Community 5 - "class-variance-authority"
Cohesion: 0.08
Nodes (25): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, BreadcrumbEllipsis(), BreadcrumbItem() (+17 more)

### Community 6 - "cn"
Cohesion: 0.14
Nodes (22): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardAction(), CardContent(), CardDescription(), CardFooter() (+14 more)

### Community 7 - "page.tsx"
Cohesion: 0.10
Nodes (21): adicionales, bebidas, cazuelaMariscos, cervezas, ceviches, crepes, fadeInUp, formatPrice() (+13 more)

### Community 8 - "command.tsx"
Cohesion: 0.11
Nodes (16): Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut() (+8 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (19): name, private, version, autoprefixer, date-fns, @hookform/resolvers, postcss, @radix-ui/react-separator (+11 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 12 - "menubar.tsx"
Cohesion: 0.11
Nodes (12): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+4 more)

### Community 13 - "context-menu.tsx"
Cohesion: 0.12
Nodes (10): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+2 more)

### Community 14 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (10): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+2 more)

### Community 15 - "form.tsx"
Cohesion: 0.17
Nodes (13): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue, FormLabel() (+5 more)

### Community 16 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+6 more)

### Community 17 - "field.tsx"
Cohesion: 0.16
Nodes (12): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+4 more)

### Community 18 - "item.tsx"
Cohesion: 0.18
Nodes (12): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+4 more)

### Community 19 - "chart.tsx"
Cohesion: 0.23
Nodes (10): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload(), THEMES (+2 more)

### Community 20 - "drawer.tsx"
Cohesion: 0.17
Nodes (7): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle(), vaul

### Community 21 - "sheet.tsx"
Cohesion: 0.17
Nodes (8): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle(), @radix-ui/react-dialog

### Community 22 - "input-group.tsx"
Cohesion: 0.24
Nodes (9): InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText(), InputGroupTextarea() (+1 more)

### Community 23 - "navigation-menu.tsx"
Cohesion: 0.20
Nodes (10): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+2 more)

### Community 24 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, postcss, tailwindcss, @tailwindcss/postcss, tw-animate-css, @types/node, @types/react, @types/react-dom (+1 more)

### Community 25 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 26 - "layout.tsx"
Cohesion: 0.29
Nodes (5): metadata, oswald, pacifico, robotoCondensed, next

### Community 29 - "tabs.tsx"
Cohesion: 0.33
Nodes (5): Tabs(), TabsContent(), TabsList(), TabsTrigger(), @radix-ui/react-tabs

### Community 32 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 33 - "scroll-area.tsx"
Cohesion: 0.50
Nodes (3): ScrollArea(), ScrollBar(), @radix-ui/react-scroll-area

## Knowledge Gaps
- **170 isolated node(s):** `Action`, `ActionType`, `State`, `ToasterToast`, `Action` (+165 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 228 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `hooks/use-toast.ts`, `utils.ts`, `sidebar.tsx`, `react`, `class-variance-authority`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `form.tsx`, `carousel.tsx`, `field.tsx`, `item.tsx`, `chart.tsx`, `drawer.tsx`, `sheet.tsx`, `input-group.tsx`, `navigation-menu.tsx`, `empty.tsx`, `popover.tsx`, `tabs.tsx`, `hover-card.tsx`, `scroll-area.tsx`, `progress.tsx`, `slider.tsx`?**
  _High betweenness centrality (0.389) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `hooks/use-toast.ts`, `utils.ts`, `sidebar.tsx`, `class-variance-authority`, `cn`, `page.tsx`, `command.tsx`, `package.json`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `form.tsx`, `carousel.tsx`, `field.tsx`, `item.tsx`, `chart.tsx`, `drawer.tsx`, `sheet.tsx`, `input-group.tsx`, `navigation-menu.tsx`, `theme-provider.tsx`, `popover.tsx`, `tabs.tsx`, `hover-card.tsx`, `scroll-area.tsx`, `progress.tsx`, `slider.tsx`?**
  _High betweenness centrality (0.209) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **What connects `Action`, `ActionType`, `State` to the rest of the system?**
  _170 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.0392156862745098 - nodes in this community are weakly interconnected._
- **Should `hooks/use-toast.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07419712070874862 - nodes in this community are weakly interconnected._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0545876887340302 - nodes in this community are weakly interconnected._