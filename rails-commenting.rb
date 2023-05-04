# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Defines the controller which is inherited from ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2)retrieves all the current resources in the database
    @posts = BlogPost.all
  end

  # ---3) Creates a form to enter informsation for a new resource. *this does not disply or show a new resource just creates the form to enter the information*
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)This creates and shows a new resource. It also checks to make sure the resource is valid and then redirects the user to the blog_post page once complete.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Creates the from to enter updated information *this does not actually update the information just creates the from to enter the new information.*
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Tis will POST updated information that was entered from the edit method. It also checks to make sure the update is valid before accepting the update and then redirects the use to the blog_post page after the update is made.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)Redirects the user back to the blog_post page after a post is deleted
      redirect_to blog_posts_path
    end
  end

  # ---9) makes this method only accessible withing the controller
  private
  def blog_post_params
    # ---10) creates the requirements for a blog_post to be "valid" and sets the requirment to have a title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
